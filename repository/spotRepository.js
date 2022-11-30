export default (db) => {
  const insert = (spot) => db.spots.create(spot);

  const findAll = () =>
    db.spots.findAll({
      include: { model: db.images, attributes: ["url"] },
      order: [["title", "ASC"]],
    });

  const findOneByID = (id) =>
    db.spots.findOne({
      where: {
        id: id,
      },
      include: [
        { model: db.users, attributes: ["name"] },
        {
          model: db.images,
          attributes: ["id", "url"],
        },
        {
          model: db.reviews,
          attributes: ["id", "user_id", "rating", "body"],
          include: { model: db.users, attributes: ["name"] },
          order: [["timestamp", "DESC"]],
        },
      ],
    });

  return { insert, findAll, findOneByID };
};
