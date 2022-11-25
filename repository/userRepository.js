export default (db) => {
  const insert = (user) => db.users.create(user);

  const findByEmail = (email) =>
    db.users.findOne({
      where: {
        email: email,
      },
    });

  return { insert, findByEmail };
};
