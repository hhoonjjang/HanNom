import express from "express";
import dotenv from "dotenv";

import cors from "cors";

import db from "../models/index.js";
import routes from "../routes/index.js";
const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);
import pinataSDK from "@pinata/sdk";

const app = express();

dotenv.config();

// const web3 = new Web3("http://127.0.0.1:8080");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error(error);
  });
app.use("/api", routes);

app.listen(8080, () => {
  console.log("8080 port server open");
});
