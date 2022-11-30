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
          attributes: ["url", "filename"],
        },
        {
          model: db.reviews,
          attributes: ["id", "user_id", "rating", "body"],
          include: { model: db.users, attributes: ["name"] },
          order: [["timestamp", "DESC"]],
        },
      ],
    });

  const updateByID = (id, data) => {
    db.spots.update(data, { where: { id: id } });
  };

  const deleteByID = (id) => db.spots.destroy({ where: { id: id } });

  return { insert, findAll, findOneByID, updateByID, deleteByID };
};
