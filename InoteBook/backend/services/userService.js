import UserModel from "../models/User.js";
import { checkData, insertData } from "../utils/globalUtil.js";
import { generateToken } from "../utils/jwtUtils.js";
import bcrypt from "bcrypt";

const signUpService = async (data, res) => {
  const { name, email, password } = data;
  try {
    const isUserExists = await checkData(UserModel, email);
    if (isUserExists) {
      return res.status(403).send({ message: `User Already Exists` });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const dataObj = {
      name,
      email,
      password: hashedPassword,
    };

    const createdUser = await insertData(UserModel, dataObj);

    const payload = {
      id: createdUser._id,
      data: data,
    };

    const JWTToken = generateToken(payload);
    return res
      .status(200)
      .send({ message: `User Created Successfully`, token: JWTToken });
  } catch (err) {
    return res
      .status(500)
      .send({ message: `Error at signUpService: ${err.message}` });
  }
};

const loginService = async (data, res) => {
  const { email, password } = data;
  try {
    const user = await checkData(UserModel, email);
    if (!user) {
      return res
        .status(400)
        .send({ message: `Please enter correct credentials` });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .send({ message: `Please enter correct credentials` });
    }

    const JWTToken = generateToken(data);
    return res.status(200).send({ token: JWTToken });
  } catch (error) {
    console.error(`Error at loginService:`, error);
    return res
      .status(500)
      .send({ message: `Internal server error: ${error.message}` });
  }
};

const getUserService = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  return res.status(200).send(user);
};

export default { signUpService, loginService, getUserService };
