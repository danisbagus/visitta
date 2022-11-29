export default (db) => {
  const insert = (review) => db.reviews.create(review);

  const deleteByID = (id) => db.reviews.destroy({ where: { id: id } });

  return { insert, deleteByID };
};
