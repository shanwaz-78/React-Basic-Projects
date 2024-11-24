const checkData = async (RegiserModel, email) => {
  try {
    const isUserExists = await RegiserModel.findOne({ email });
    return isUserExists;
  } catch (error) {
    console.log(`Error while check user existence:`, error.message);
    throw error;
  }
};

const insertData = async (RegisterModel, data) => {
  try {
    const createdUser = new RegisterModel(data);
    await createdUser.save();

    const { password: hashPassword, ...restInfo } = createdUser.toObject();
    return restInfo;
  } catch (error) {
    console.log(`Error while creating or saving user details:`, error.message);
    throw error;
  }
};

export { checkData, insertData };
