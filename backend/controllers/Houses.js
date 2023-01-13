import Houses from "../models/HousesModel.js";

// controller file just shows the different functionality of nodeJS server
// the function names are self-explanatory
// try catch blocks are used to catch any issues like not finding database table or field or any error that occurs
// res.json means update response's json file whose key is message & value is respective error.message
// the models are built using Sequelize so we use sequelize queries to write SQL queries in short-form
// .findAll() is alternative for select
// .create() is used to create new tuple or insert
// .update() is used to update a tuple similar to update
// .destroy() is used to delete tuple similar to delete
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
