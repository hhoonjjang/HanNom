import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import pinataSDK from '@pinata/sdk';
import { Readable } from 'stream';
// import Web3 from "web3";
// import { AbiItem } from "web3-utils";
import axios from 'axios';
import db from '../models/index.js';
import routes from '../routes/index.js';

// import { abi as NftAbi } from "../contracts/artifacts/NftToken.json";
// import { abi as SaleAbi } from "../contracts/artifacts/SaleToken.json";

const app = express();

dotenv.config();

// const web3 = new Web3("http://127.0.0.1:8080");

const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);

app.use('/upload', express.static('upload'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const upload: multer.Multer = multer();
db.sequelize
    .sync({ force: false })
    .then(() => {
        console.log('DB connected');
    })
    .catch((error) => {
        console.error(error);
    });
app.use('/api', routes);

app.listen(8080, () => {
    console.log('8080 port server open');
});
