import {Router} from 'express';
import controller from '../controller/index.js';

const userRouter = Router();

userRouter.post('/register', controller.userController.registerController);
userRouter.post('/login', controller.userController.loginController);

export default userRouter;