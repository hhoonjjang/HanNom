import { Router } from "express";
import multer from "multer";
import Web3 from "web3";
import { Nft, User } from "../models/index.js";
import axios from "axios";
import fs from "fs";
import jwt from "jsonwebtoken";
import { Readable } from "stream";
// const web3 = new Web3("http://ganache.test.errorcode.help:8545");
const web3 = new Web3(
  "wss://goerli.infura.io/ws/v3/2370d723f2b24ee69ca1d052c7a0e099"
);
const router = Router();
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    const dir = "./upload";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/login", async (req, res) => {
  // db에서 nickname 있는지 없는지 판별
  // 쿠키 발급.
  let user = await User.findOne({ where: { userAddress: req.body.account } });
  console.log(user);

  if (!user) {
    await User.create({
      userAddress: req.body.account,
      userName: "unknown",
    });
    // res.send({ account: req.body.account, username: "unkown" });
  } else if (user.userName != "unknown") {
    res.cookie(
      "userName",
      jwt.sign(
        {
          userAddress: req.body.account,
          userName: user.userName,
        },
        process.env.JWT_KEY,
        { algorithm: "HS256", expiresIn: "300m", issuer: "킹영준" }
      )
    );
  }
  user = await User.findOne({ where: { userAddress: req.body.account } });

  res.send(user);

  //   res.send(user);
  // } else {
  //   if (user.userName == "unknown") {
  //   } else {
  //   }
  // }

  // res.send(userName);
  console.log(req.body.account);

  // res.send({ msg: "쿠키생성완료" });
});

router.post(
  "/regist",
  upload.fields([
    { name: "profile", limits: 1 },
    { name: "background", limits: 1 },
  ]),
  async (req, res) => {
    console.log(req.files.profile);
    console.log(req.files.background);
    console.log(req.body.account);
    const userAccount = req.body.account;
    const userName = req.body.nickName;
    if (!(userName.length >= 2 || userName.length < 10)) {
      res.send({ msg: "글자수가 맞지 않습니다." });
    } else {
      await User.update(
        {
          userName: userName,
          profileImg: `/upload/${req.files.profile[0].filename}`,
          backgroundImg: `/upload/${req.files.background[0].filename}`,
        },
        { where: { userAddress: userAccount } }
      );
    }
    const user = await User.findOne({
      where: { userAddress: userAccount },
    });
    res.send({ user: user });
  }
);
export default router;
