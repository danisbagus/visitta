export default (db) => {
  const bulkInsert = (images) => db.images.bulkCreate(images);

  return { bulkInsert };
};
