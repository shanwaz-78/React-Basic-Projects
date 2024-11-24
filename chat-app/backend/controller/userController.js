import services from "../services/index.js";

const registerController = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.statsu(400).json({ message: `Please provide all fields` });
  }
  services.userServices.registerService(req.body, res);
};

const loginController = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: `All fields are required` });
  }
  services.userServices.loginService(req.body, res);
};

export default { registerController, loginController };
