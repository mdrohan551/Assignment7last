import jwt from "jsonwebtoken";
import {JWT_EXPIRATION_TIME_TOKEN, JWT_SECRET_TOKEN,} from "../config/config.js";

// Encode Access Token
export const EncodeToken = (email, user_id) => {
  const KEY = JWT_SECRET_TOKEN;
  const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME_TOKEN };
  const PAYLOAD = { email: email, user_id: user_id };
  const token =jwt.sign(PAYLOAD, KEY, EXPIRE);
  return token;
};

// Decode Access Token
export const DecodeToken = (token) => {
  try {
    const KEY = JWT_SECRET_TOKEN;
    return jwt.verify(token, KEY);
  } catch (e) {
    console.error("Invalid or expired token:", e.message);
    return null;
  }
};
