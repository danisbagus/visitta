export default (db) => {
  const findAll = () =>
    db.spots.findAll({
      include: { model: db.images, attributes: ["url"] },
    });

  return { findAll };
};
