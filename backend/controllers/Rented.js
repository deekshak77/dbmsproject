import Rented from "../models/RentedModel.js";
export const getAllRentedHouses = async (req, res) => {
  try {
    const rented = await Rented.findAll();
    res.json(rented);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getRentedHouseById = async (req, res) => {
  try {
    const rented = await Rented.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(rented[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createRentedHouse = async (req, res) => {
  try {
    await Rented.create(req.body);
    res.json({
      message: "Rented House Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateRentedHouse = async (req, res) => {
  try {
    await Rented.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Rented House Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteRentedHouse = async (req, res) => {
  try {
    await Rented.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Rented House Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
