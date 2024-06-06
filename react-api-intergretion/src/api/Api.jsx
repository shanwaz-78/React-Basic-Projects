import axios from 'axios';

export const fetchUsers = async (URL) => {
  try {
    const response = await axios.get(`${URL}/users`);
    return response.data;
  } catch (error) {
    console.log(`Error at fetchUsers:`, error);
    throw error;
  }
};