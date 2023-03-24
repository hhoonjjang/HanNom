import { Router } from "express";
import multer from "multer";
import Web3 from "web3";
import { Nft, User } from "../models/index.js";
import axios from "axios";
import fs from "fs";

import { Readable } from "stream";
const web3 = new Web3("http://ganache.test.errorcode.help:8545");
const router = Router();
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/login", async (req, res) => {
  // db에서 nickname 있는지 없는지 판별
  // 쿠키 발급.
  // const userName= User.findOne{
  //   where:
  // };
  // res.send(userName);
});

router.post("/regist", async (req, res) => {
  const userName = req.body.nickname;
  if (!(userName.length >= 2 || userName.length < 10))
    res.send({ msg: "글자수가 맞지 않습니다." });
  User.create({
    userAddress: req.body.account,
    userName: userName,
  });
  res.send(userName);
});
export default router;
