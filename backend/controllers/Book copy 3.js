import Book from "../models/CustomersModel.js";
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findAll({
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
    await Book.create(req.body);
    res.json({
      message: "Book Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    await Book.update(req.body, {
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
    await Book.destroy({
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
