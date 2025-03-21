import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";
export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });
  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //15d in ms
    httpOnly: true, //prevent XSS attacks, make it not be accessible by js
    sameSite: "strict",
    secure: ENV_VARS.NODE_ENV !== "development",
  });
};
