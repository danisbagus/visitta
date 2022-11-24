import bcrypt from "bcrypt";

const hashPassword = async (plaintextPassword) => {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash;
};

const comparePassword = async (plaintextPassword, hash) => {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
};

export default { hashPassword, comparePassword };
