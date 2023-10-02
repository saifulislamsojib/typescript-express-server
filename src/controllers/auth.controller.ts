import { createUser, getUserByEmail, getUserById } from '@/services/auth.service';
import AnyObject from '@/types/anyObject';
import { Auth, LoginBody, ValidationError } from '@/types/auth';
import createJwtToken from '@/utils/createJwtToken';
import getPayload from '@/utils/getPayload';
import handleError from '@/utils/handleError';
import { compare, hash } from 'bcrypt';
import { RequestHandler } from 'express';

export const registration: RequestHandler<AnyObject, AnyObject, Auth> = async (req, res) => {
  const { name, email, password: plainPassword, phone } = req.body;
  try {
    const password = await hash(plainPassword, 10);
    const user = await createUser({
      name,
      email,
      password,
      phone,
    });
    const payload = getPayload(user);
    const token = createJwtToken(payload);
    return res.status(201).json({ auth: payload, token, message: 'Account Register Successfully' });
  } catch (err) {
    const errors = handleError(err as ValidationError);
    return res.status(203).json({ errors });
  }
};

export const login: RequestHandler<AnyObject, AnyObject, LoginBody> = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (user?._id) {
      const isValidPassword = await compare(password, user.password);
      if (isValidPassword) {
        const auth = getPayload(user);
        const token = createJwtToken(auth);
        return res.status(201).json({ auth, token, message: 'Account Login Successfully' });
      }
      return res.status(203).json({ error: 'Invalid Email or Password' });
    }
    return res.status(203).json({ error: 'Invalid Email or Password' });
  } catch (err) {
    return res.status(400).json({ error: (err as Error).message });
  }
};

export const getLoggedInUser: RequestHandler = async (req, res) => {
  const { _id } = req.auth!;
  try {
    const user = await getUserById(_id);
    if (user?._id) {
      const auth = getPayload(user);
      return res.status(201).json({ auth });
    }
    return res.status(401).json({ message: 'Invalid token' });
  } catch (err) {
    return res.status(401).json(err);
  }
};
