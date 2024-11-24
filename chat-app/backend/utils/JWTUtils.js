import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;
const EXPIRY_TIME = process.env.EXPIRY_TIME;

function generateToken(payload) {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRY_TIME });
  return token;
}

export { generateToken };
