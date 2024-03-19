import Showtime from "../models/ShowtimeModel.js";
export const getAllShowtime= async (req, res) => {
  try {
    const showtime = await Showtime.findAll();
    res.json(showtime);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getShowtimeById = async (req, res) => {
  try {
    const showtime = await Showtime.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(showtime[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createShowtime = async (req, res) => {
  try {
    await Showtime.create(req.body);
    res.json({
      message: "Showtime House with Owner Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateShowtime = async (req, res) => {
  try {
    await Showtime.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Showtime House with Owner Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteShowtime = async (req, res) => {
  try {
    await Showtime.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Showtime House with Owner Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
