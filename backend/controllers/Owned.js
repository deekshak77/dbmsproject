import Owned from "../models/OwnedModel.js";
export const getAllOwneds = async (req, res) => {
  try {
    const owned = await Owned.findAll();
    res.json(owned);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOwnedById = async (req, res) => {
  try {
    const owned = await Owned.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(owned[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createOwned = async (req, res) => {
  try {
    await Owned.create(req.body);
    res.json({
      message: "Owned House with Owner Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateOwned = async (req, res) => {
  try {
    await Owned.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Owned House with Owner Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteOwned = async (req, res) => {
  try {
    await Owned.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Owned House with Owner Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
