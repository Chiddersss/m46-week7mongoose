require("dotenv").config();
require("./db/connection");

const express = require("express");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

app.use(bookRouter);

app.listen(5003, () => console.log("Server is listening"));

