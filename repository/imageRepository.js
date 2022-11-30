export default (db) => {
  const bulkInsert = (images) => db.images.bulkCreate(images);

  const bulkDeleteByFilenames = (filenames) =>
    db.images.destroy({ where: { filename: filenames } });

  return { bulkInsert, bulkDeleteByFilenames };
};
