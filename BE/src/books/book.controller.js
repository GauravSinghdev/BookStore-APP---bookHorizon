const Book = require("./book.model");

//post a Book
const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res.status(200).send({
      message: "Book posted successfully",
      book: newBook,
    });
  } catch (error) {
    console.error("Error created book", error);
    res.status(500).send({
      message: "Failed to create book",
      error,
    });
  }
};

//get all Book
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({
      message: "Failed to fetch all books",
      error,
    });
  }
};

//get a single book acc to id
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      res.status(404).send({
        message: "Book not Found!",
      });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error fetching book", error);
    res.status(500).send({
      message: "Failed to fetch a book",
      error,
    });
  }
};

//update book data
const UpdateBookData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateBook) {
      res.status(404).send({
        message: "Book not found!",
      });
    }

    res.status(200).send({
      message: "Book updated successfully",
      book: updateBook,
    });
  } catch (error) {
    console.error("Error updating a book", error);
    res.status(500).send({
      message: "Failed to update a book",
      error,
    });
  }
};

//delete a book
const delSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      res.status(404).send({
        message: "Book not found!",
      });
    }

    res.status(200).send({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error("Error deleting a book", error);
    res.status(500).send({
      message: "Failed to delete a book",
      error,
    });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  UpdateBookData,
  delSingleBook,
};
