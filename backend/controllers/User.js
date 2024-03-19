import User from "../models/UserModel.js";
export const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "User House Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User House Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteUser= async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User House Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
