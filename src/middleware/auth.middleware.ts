import checkJWT from '@/utils/checkJWT';
import { RequestHandler } from 'express';

const authCheck: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const auth = checkJWT(authorization);
    if (auth) {
      req.auth = auth;
      return next();
    }
    return res.status(401).json({ message: 'Invalid token' });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authCheck;
