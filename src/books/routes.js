const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks, addBook, updateBookAuthor, deleteBook } = require("./controllers");

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.post("/books/addbook", addBook);

bookRouter.put("/books/updatebookauthor/:id", updateBookAuthor);

bookRouter.delete("/books/deletebook/:id", deleteBook);

module.exports = bookRouter;