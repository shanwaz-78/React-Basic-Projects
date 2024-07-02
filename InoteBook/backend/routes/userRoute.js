import { Router } from "express";
import controllers from "../controller/index.js";
import verifyToken from '../middleware/auth.js';

const userRoute = Router();

userRoute.post("/create-user", controllers.userControllers.signUpController);
userRoute.post("/login", controllers.userControllers.loginController);
userRoute.post("/get-user", verifyToken, controllers.userControllers.getUserController);

export default userRoute;
