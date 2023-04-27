const Book = require("./model");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      author: req.body.author,
      genre: req.body.genre,
      title: req.body.title,
    });

    res.status(201).json({ message: "success", newBook: newBook });
  } catch (error) {
    console.log(error);
  }
};

// update book findOneAndUpdate
const updateBookAuthor = async (req, res) => {
    try {
        const updateBook = await Book.findOneAndUpdate({ _id: req.params })

        res.status(200).json({ message: "success", updatedBook: updatedBook });
    } catch {
        res.status(400).json({ message: "error", error: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({ _id: req.params });
        
        res.status(200).json({ message: "success", deletedBook: deletedBook });
    } catch (error) {
        res.status(400).json({ message: "error", error: error.message });
    }
}

module.exports = {
  getAllBooks,
  addBook,
  updateBookAuthor,
};