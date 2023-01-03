import Owners from "../models/OwnersModel.js";
export const getAllOwners = async (req, res) => {
  try {
    const owners = await Owners.findAll();
    res.json(owners);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOwnerById = async (req, res) => {
  try {
    const owner = await Owners.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(owner[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createOwner = async (req, res) => {
  try {
    await Owners.create(req.body);
    res.json({
      message: "Owner Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateOwner = async (req, res) => {
  try {
    await Owners.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Owner Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteOwner = async (req, res) => {
  try {
    await Owners.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Owner Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
