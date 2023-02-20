const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./Routes/routes");

const dbUrl = process.env.DATABASE_URL;

const App = express();
mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("db error", error);
});
db.once("connected", () => {
  console.log("Database successfully connected !");
});

App.use(express.json());

App.listen(3000, () => {
  console.log("Server started @3000 !");
});

App.use("/api", routes);
