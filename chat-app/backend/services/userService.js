import RegisterModel from "../models/UserModel.js";
import { checkData, insertData } from "../utils/globalUtil.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/JWTUtils.js";

const SALT_OF_ROUNDS = process.env.SALT_OF_ROUNDS;

const registerService = async (data, res) => {
  const { email, password } = data;
  try {
    const isUserExists = await checkData(RegisterModel, email);
    if (isUserExists) {
      return res.status(400).json({ message: `Email already exists` });
    }
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(SALT_OF_ROUNDS, 10)
    );
    data.password = hashedPassword;
    const createdUser = await insertData(RegisterModel, data);
    return res
      .status(201)
      .json({ message: `Registered Successfully.`, createdUser });
  } catch (error) {
    console.log(`Error in registerService:`, error.message);
    throw error;
  }
};

const loginService = async (data, res) => {
  const { email, password } = data;
  try {
    const isUserRegistered = await checkData(RegisterModel, email);
    if (!isUserRegistered) {
      return res
        .status(400)
        .json({ message: `Email not exists, Please regsiter first.` });
    }
    console.log(isUserRegistered);
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserRegistered.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({ message: `Incorrect password` });
    }

    const { password: hashedPassword, ...restInfo } =
      isUserRegistered.toObject();
    const token = generateToken(restInfo);
    return res.status(200).json({ message: `Login Successfully`, token });
  } catch (error) {
    console.log(`Error in loginService:`, error.message);
    throw error;
  }
};

export default { registerService, loginService };
