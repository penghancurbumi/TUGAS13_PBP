const express = require("express");
const handphoneRoute = require("./routes/handphoneRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/", handphoneRoute);

app.use(errorHandler);

module.exports = app;