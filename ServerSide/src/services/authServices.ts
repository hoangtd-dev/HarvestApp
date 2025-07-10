import { generateToken } from "../utils/authUtils";

const login = async (email: string, password: string) => {
  try {
    // TODO: Implement login logic

    // TODO: Get user from database
    const user = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };

    const { accessToken, refreshToken } = generateToken(user);

    // TODO: Set refresh token in mongodb session
    return { accessToken };
  } catch (error) {
    throw error;
  }
};

export default {
  login,
};
