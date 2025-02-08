import { DecodeToken } from "../utils/TokenHelper.js";

export default (req, res, next) => {
  let token = req.headers["token"] || req.headers.authorization?.split(" ")[1];
  if (!token) {
    token = req.cookies["token"];
  }

  let decoded = DecodeToken(token);
  if (decoded === null) {
    return res
      .status(401)
      .json({ status: "fail", message: "Unauthenticated. Token is required." });
  } else {
    let email = decoded.email;
    let user_id = decoded.user_id;

    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
