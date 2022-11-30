import crypto from "crypto";
import errs from "../utils/errs.js";
import cloudinary from "../utils/cloudinary.js";

export default (spotRepository, imageRepository) => {
  const insert = async (userID, title, description, location, uploadImages) => {
    if (!userID) {
      throw errs.badRequestError("user id is required");
    }
    if (!title) {
      throw errs.badRequestError("title is required");
    }
    if (!description) {
      throw errs.badRequestError("description is required");
    }
    if (!location) {
      throw errs.badRequestError("location is required");
    }
    if (!uploadImages || uploadImages.length == 0) {
      throw errs.badRequestError("images is required");
    }

    const spotID = crypto.randomUUID();
    const currentTime = new Date().getTime();

    const insertSpotData = {
      id: spotID,
      title,
      description,
      location,
      user_id: userID,
      timestamp: currentTime,
    };

    await spotRepository.insert(insertSpotData);

    let insertImages = [];
    uploadImages.map((image) => {
      const imageID = crypto.randomUUID();
      const imageData = {
        id: imageID,
        spot_id: spotID,
        url: image.url,
        filename: image.filename,
      };

      insertImages.push(imageData);
    });

    if (insertImages.length > 0) {
      await imageRepository.bulkInsert(insertImages);
    }

    return insertSpotData;
  };

  const getList = async () => {
    const spots = await spotRepository.findAll();
    return spots;
  };

  const getDetail = async (id) => {
    const spot = await spotRepository.findOneByID(id);

    if (!spot) {
      throw errs.badRequestError("spot not found");
    }

    spot.images.forEach((image, i) => {
      spot.dataValues.images[i].thumbnail = image.url.replace(
        "/upload",
        "/upload/w_200"
      );
    });

    return spot;
  };

  const update = async (form) => {
    // validation
    if (!form.title) {
      throw errs.badRequestError("title is required");
    }
    if (!form.description) {
      throw errs.badRequestError("description is required");
    }
    if (!form.location) {
      throw errs.badRequestError("location is required");
    }

    // update spot
    const updateSpotData = {
      title: form.title,
      description: form.description,
      location: form.location,
    };

    await spotRepository.updateByID(form.spotID, updateSpotData);

    // insert images
    let insertImages = [];
    form.uploadImages.map((image) => {
      const imageID = crypto.randomUUID();
      const imageData = {
        id: imageID,
        spot_id: form.spotID,
        url: image.url,
        filename: image.filename,
      };

      insertImages.push(imageData);
    });

    if (insertImages.length > 0) {
      await imageRepository.bulkInsert(insertImages);
    }

    // delete images
    if (form.deleteImages) {
      for (let filename of form.deleteImages) {
        await cloudinary.cloudinary.uploader.destroy(filename);
      }

      await imageRepository.bulkDeleteByFilenames(form.deleteImages);
    }
  };

  return { insert, getList, getDetail, update };
};
