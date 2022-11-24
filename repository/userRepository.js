export default (db) => {
  const insert = (user) =>
    db.run("INSERT INTO users VALUES (?, ?, ?, ?, ?)", [
      user.id,
      user.email,
      user.password,
      user.role,
      user.timestamp,
    ]);

  const findByEmail = (email) =>
    db.get("SELECT * FROM users WHERE email=?", [email]);

  return { insert, findByEmail };
};
