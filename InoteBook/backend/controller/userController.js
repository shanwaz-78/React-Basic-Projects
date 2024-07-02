import services from "../services/index.js";
const signUpController = (req, res) => {
  services.userServices.signUpService(req.body, res);
};

const loginController = (req, res) => {
  services.userServices.loginService(req.body, res);
};

const getUserController = (req, res) => {
  services.userServices.getUserService(req, res);
};
export default { signUpController, loginController, getUserController };
