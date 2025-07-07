import UserServices from "../services/userServices.mjs";

const createUser = async (req, res, next) => {
  try {
    const result = await UserServices.createUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const result = await UserServices.getUserById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getUsers();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export default {
  createUser,
  getUserById,
  getUsers,
};
