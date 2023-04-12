require("dotenv").config();
require("./db/connection");

const express = require("express");


const Book = require("./books/model")

const app = express();

app.use(express.json());

app.get("/books/getallbooks", async (req, res) => {
    try {
        const books = await Book.find({})
        console.log("books: ", typeof books, books)
        const successResponse = {
            message: "success",
            books: books,
        };

        res.status(200).json(successResponse)
    } catch (error) {
        console.log(error);
    }
});

app.post("/books/addbook", async (req, res) => {
    try {

        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        });

        const successResponse = {
            message: "success",
            newBook: newBook,
        }

        res.status(201).json(successResponse)

    } catch (error) {
        console.log(error);
    }
});

app.listen(5001, () => console.log("Server is running on port 5001"));

