import { RequestHandler } from "express";
import checkJWT from "../utils/checkJWT";

const authCheck: RequestHandler = (req, res, next): void => {
  const token = req.headers.authorization;
  try {
    const auth = checkJWT(token);
    if (auth) {
      req.auth = auth;
      next();
    } else {
      res.status(401).json({ message: "Invalid token" });
    }
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authCheck;
