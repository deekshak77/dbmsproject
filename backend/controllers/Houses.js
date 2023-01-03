import Houses from "../models/HousesModel.js";
export const getAllHouses = async (req, res) => {
  try {
    const houses = await Houses.findAll();
    res.json(houses);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getHouseById = async (req, res) => {
  try {
    const house = await Houses.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(house[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createHouse = async (req, res) => {
  try {
    await Houses.create(req.body);
    res.json({
      message: "House Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateHouse = async (req, res) => {
  try {
    await Houses.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "House Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    await Houses.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "House Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
