require("dotenv").config();

const path = require("path");
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const mongoose = require("mongoose");
// const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;
const app = express();
// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.post("/email", (req,res) => {
//   res.json({message:"message recieved!"})
// })


db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});