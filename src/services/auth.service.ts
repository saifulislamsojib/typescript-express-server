import User from '../models/auth.model';
import type { Auth } from '../types/auth';

export const createUser = (user: Omit<Auth, '_id'>) => {
    const newUser = new User(user);
    return newUser.save();
};

export const getUserByEmail = (email: string) => {
    return User.findOne({ email });
};

export const getUserById = (id: string) => {
    return User.findOne({ id });
};
