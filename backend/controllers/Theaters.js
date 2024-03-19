import Theaters from "../models/TheatersModel.js";
export const getAllTheaters = async (req, res) => {
  try {
    const theaters = await Theaters.findAll();
    res.json(theaters);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getTheaterById = async (req, res) => {
  try {
    const theater = await Theaters.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(theater[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createTheater = async (req, res) => {
  try {
    await Theaters.create(req.body);
    res.json({
      message: "Theater Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateTheater = async (req, res) => {
  try {
    await Theaters.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Theater Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteTheater = async (req, res) => {
  try {
    await Theaters.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Theater Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
