import crypto from "crypto";

import jwt from "../utils/jwt.js";
import errs from "../utils/errs.js";
import bycript from "../utils/bycript.js";

export default (userRepository) => {
  const register = async (name, email, password, role) => {
    if (!name) {
      throw errs.badRequestError("name is required");
    }
    if (!email) {
      throw errs.badRequestError("email is required");
    }
    if (!password) {
      throw errs.badRequestError("password is required");
    }
    if (!role) {
      throw errs.badRequestError("role is required");
    }

    const user = await userRepository.findByEmail(email);
    if (user) {
      throw errs.badRequestError("email already used");
    }

    const userID = crypto.randomUUID();
    const hashPassword = await bycript.hashPassword(password);
    const currentTime = new Date().getTime();

    const insertData = {
      id: userID,
      name,
      email,
      password: hashPassword,
      role,
      timestamp: currentTime,
    };

    await userRepository.insert(insertData);

    return insertData;
  };

  const login = async (email, password) => {
    if (!email) {
      throw errs.badRequestError("email is required");
    }
    if (!password) {
      throw errs.badRequestError("password is required");
    }

    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw errs.badRequestError("user not found");
    }

    const isCompared = await bycript.comparePassword(password, user.password);

    if (!isCompared) {
      throw errs.badRequestError("invalid password");
    }

    const claim = {
      id: user.id,
      email: user.email,
      role: user.role,
      timestamp: user.timestamp,
    };

    const token = jwt.generateToken(claim);

    return { token };
  };

  const getClaim = (user) => {
    if (!user) {
      throw errs.unauthorizedError("user not found");
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      timestamp: user.timestamp,
    };
  };

  return { register, login, getClaim };
};
