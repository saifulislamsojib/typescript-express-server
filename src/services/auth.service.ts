import User from "../models/auth.model";
import type { Auth } from "../types/auth";

export const createUser = async (user: Omit<Auth, "_id">) => {
  const newUser = new User(user);
  return await newUser.save();
};

export const getUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export const getUserById = async (id: string) => {
  return await User.findOne({ id });
};
