export default (db) => {
  const findAll = () =>
    db.spots.findAll({
      include: { model: db.images, attributes: ["url"] },
    });

  const findOneByID = (id) =>
    db.spots.findOne({
      where: {
        id: id,
      },
      include: [
        { model: db.users, attributes: ["name"] },
        { model: db.images, attributes: ["url"] },
        { model: db.reviews, attributes: ["rating", "body"] },
      ],
    });

  return { findAll, findOneByID };
};
