import { verify } from "jsonwebtoken";
import configs from "../configs";
import type { AuthPayload } from "../types/auth";

const checkJWT = (token: string | undefined): AuthPayload | null => {
  if (token && token.startsWith("Bearer ") && token.split(" ")[1]) {
    return verify(token.split(" ")[1], configs.jwt_secret) as AuthPayload;
  }
  return null;
};

export default checkJWT;
