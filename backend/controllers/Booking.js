import Booking from "../models/BookingModel.js";
export const getAllBooking = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.json(booking);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Booking.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(book[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    await Booking.create(req.body);
    res.json({
      message: "Book Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    await Booking.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Book Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Booking.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Book Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
