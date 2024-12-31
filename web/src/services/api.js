import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://ai-avatar-backend-bjf3htefc7gac8cg.canadacentral-01.azurewebsites.net';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
