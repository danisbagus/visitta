import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import config from "../config/app.js";

cloudinary.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryKey,
  api_secret: config.cloudinarySecret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "visitTA",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

export default {
  cloudinary,
  storage,
};
