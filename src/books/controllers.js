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
    const updatedBook = await Book.findOneAndUpdate(
      {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
      },
      {
        author: req.body.newAuthor // update the author field with the new value
      },
      { new: true } // return the updated document
    );

    res.status(201).json({ message: "success", updatedBook: updatedBook });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
}


// const deleteBook = async (req, res) => {
//     try {
//         const deletedBook = await Book.findByIdAndDelete({ _id: req.params 
//         });
//         res.status(200).json({ message: "success", deletedBook: deletedBook });
//     } catch (error) {
//         res.status(400).json({ message: "error", error: error.message });
//     }
// }

const deleteBook = async (req, res) => {
    try {
      const { id } = req.params; // extract the book _id from the request parameter
      const deletedBook = await Book.findOneAndDelete({ _id: id });
  
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      res.status(200).json({ message: `successfully deleted`, deletedBook: deletedBook });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  };
  

module.exports = {
  getAllBooks,
  addBook,
  updateBookAuthor,
  deleteBook
};