const insertData = async (model, data) => {
  try {
    const createduser = await model.create(data);
    return createduser;
  } catch (error) {
    console.log(`Error at insertData:`, error);
    throw error;
  }
};

const checkData = async (model, criteria) => {
  try {
    const isUserExists = await model.findOne({ criteria });
    return isUserExists;
  } catch (error) {
    console.log(`Error at checkData:`, error);
    throw error;
  }
};

const getAllData = async (model, userId) => {
  try {
    const allNotes = await model.find({ user: userId });
    return allNotes;
  } catch (error) {
    console.log(`Error at getAllData:`, error);
    throw error;
  }
};

export { checkData, insertData, getAllData };
