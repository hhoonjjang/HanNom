import { Router } from "express";
import multer from "multer";
import Web3 from "web3";
import { Nft, User, TradeHistory } from "../models/index.js";
import axios from "axios";
import fs from "fs";
import jwt from "jsonwebtoken";
import { Readable } from "stream";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();
const web3 = new Web3("http://ganache.test.errorcode.help:8545");
// const web3 = new Web3(
//   "wss://goerli.infura.io/ws/v3/2370d723f2b24ee69ca1d052c7a0e099"
// );
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

// router.post("/login", async (req, res) => {
//   // db에서 nickname 있는지 없는지 판별
//   // 쿠키 발급.
//   let user = await User.findOne({ where: { userAddress: req.body.account } });
//   console.log(user);

//   if (!user) {
//     await User.create({
//       userAddress: req.body.account,
//       userName: "unknown",
//     });
//     // res.send({ account: req.body.account, username: "unkown" });
//   } else if (user.userName != "unknown") {
//     res.cookie(
//       "userName",
//       jwt.sign(
//         {
//           userAddress: req.body.account,
//           userName: user.userName,
//         },
//         process.env.JWT_KEY,
//         { algorithm: "HS256", expiresIn: "300m", issuer: "킹영준" }
//       )
//     );
//   }
//   user = await User.findOne({ where: { userAddress: req.body.account } });
//   console.log("확인이요");
//   console.log(req.body);
//   console.log("확인이요");

//   res.send(user);

//   //   res.send(user);
//   // } else {
//   //   if (user.userName == "unknown") {
//   //   } else {
//   //   }
//   // }

//   // res.send(userName);

//   // res.send({ msg: "쿠키생성완료" });
// });
router.post("/cookieInfo", async (req, res) => {
  console.log("cookie", req.body.cookie);
  // const cookieInfo = jwt.verify(req.body.cookie, process.env.JWT_KEY);
  console.log("req.cookie", req.cookies);
});

router.post("/userDisplay", async (req, res) => {
  console.log("유저디스플레이: ", req.body.cookie);
  // const address = req.body.cookie
  if (!req.body.account) {
    res.end();
  } else {
    const user = await User.findOne({
      where: { userAddress: req.body.account },
    });
    console.log(user);
    res.send(user);
  }
});

router.post("/getUser", async (req, res) => {
  // const address = req.body.cookie
  if (!req.body.from) {
    res.end();
  } else {
    const user = await User.findOne({
      where: { userAddress: req.body.from },
    });
    console.log(user);
    res.send(user);
  }
});
router.post("/totalPrice", async (req, res) => {
  // const address = req.body.cookie
  console.log("광광우럭따", req.body.address);

  const Op = Sequelize.Op;

  console.log("광광우럭따", req.body.address);
  let totalPrice = 0;
  let totalNum;
  if (!req.body.address) {
    res.end();
  } else {
    console.log("나도 일단 받았음");
    const saleList = await TradeHistory.findAll({
      where: {
        [Op.and]: [
          { currency: "거래완료" },
          { sellerAddress: req.body.address },
        ],
        // sellerAddress: req.body.address,
      },
    });
    totalNum = saleList.length;
    for (let i = 0; i < saleList.length; i++) {
      totalPrice += saleList[i].price;
    }
    console.log(totalPrice);
    // res.send(totalPrice);
  }
  res.send({ totalPrice: totalPrice, totalNum: totalNum });
});

router.post("/ownedBy", async (req, res) => {
  // const address = req.body.cookie
  console.log("광광우럭따", req.body.address);

  const Op = Sequelize.Op;

  console.log("광광우럭따", req.body.address);

  const ownedBy = [];
  const tempArr = [];
  if (!req.body.address) {
    res.end();
  } else {
    console.log("나도 일단 받았음");
    const saleList = await TradeHistory.findAll({
      where: {
        [Op.and]: [
          { currency: "거래완료" },
          { sellerAddress: req.body.address },
        ],
        // sellerAddress: req.body.address,
      },
    });

    for (let i = 0; i < saleList.length; i++) {
      const buyer = saleList[i].buyerAddress;
      if (!tempArr.includes(saleList[i].buyerAddress)) {
        tempArr.push(buyer);
      }
    }
    console.log("asdawdasda응ㄴㅁ아ㅓ마ㅓㅇ", tempArr);
    // res.send(totalPrice);
    const tempUserNum = tempArr.length > 3 ? 3 : tempArr.length;
    for (let i = 1; i <= tempUserNum; i++) {
      const tempUser = await User.findOne({
        where: { userAddress: tempArr },
      });
      ownedBy.push(tempUser.profileImg);
    }
    console.log("asad아ㅓ마ㅓㅇ", ownedBy);
  }
  res.send({ length: tempArr.length, ownedBy: ownedBy });
});

router.post("/latestUser", async (req, res) => {
  const Op = Sequelize.Op;
  console.log("여긴지나");
  const tradeList = await TradeHistory.findAll({
    where: { currency: "거래대기" },
    order: [["createdAt", "DESC"]],
  });
  console.log("여긴지날까");

  const tempTrade = [];
  for (let i = 0; i < tradeList.length; i++) {
    if (!tradeList.includes(tradeList[i].sellerAddress)) {
      if (tempTrade.length < 3) {
        tempTrade.push(tradeList[i].sellerAddress);
      } else {
        break;
      }
    }
  }

  console.log("tempTrade", tempTrade);
  const tempNft = [];
  for (let i = 0; i < tempTrade.length; i++) {
    const list = await Nft.findAll({
      limit: 3,
      where: { userAddress: tempTrade[i] },
      order: [["createdAt", "DESC"]],
    });
    tempNft.push(list);
  }
  console.log("tempNft", tempNft);
  // const list = await User.findAll({
  //   limit:3,
  //   order
  // })
  // const nftList = await Nft.findAll({
  //   limit:
  // })
  res.send({ userArr: tempTrade, nftArr: tempNft });
});

router.post("/login", async (req, res) => {
  // db에서 nickname 있는지 없는지 판별
  // 쿠키 발급.
  if (req.body.cookie) {
    req.body.account = req.body.cookie.split("=")[0];
  }

  console.log(req.body.account);
  let count = req.body.count;
  // console.log("req.body.count", count);
  // console.log("asd");
  // console.log("req.body.account", req.body.account);
  if (req.body.account == undefined) {
    count++;
    console.log(count);
    res.send({ count: count });
  } else {
    // console.log("else 도는중");
    let user = await User.findOne({ where: { userAddress: req.body.account } });
    console.log(user);
    if (user == undefined) {
      res.send({ msg: "회원가입필요", count: count });
    } else {
      res.cookie(
        // req.body.account + "=" + user.userName,
        req.body.account,
        jwt.sign(
          {
            userAddress: req.body.account,
            userName: user.userName,
          },
          process.env.JWT_KEY,
          { algorithm: "HS256", expiresIn: "300m", issuer: "킹영준" }
        )
      );
      res.send({ user: user, count: count });
    }
  }

  // } else if (user.userName != "unknown") {

  // }
  // user = await User.findOne({ where: { userAddress: req.body.account } });
  // console.log("확인이요");
  // console.log(req.body);
  // console.log("확인이요");

  // res.send(user);
  //==============================
  //   res.send(user);
  // } else {
  //   if (user.userName == "unknown") {
  //   } else {
  //   }
  // }

  // res.send(userName);

  // res.send({ msg: "쿠키생성완료" });
});

router.post(
  "/regist",
  upload.fields([
    { name: "profile", limits: 1 },
    { name: "background", limits: 1 },
  ]),
  async (req, res) => {
    console.log(req.files.profile[0]);
    console.log(req.files.background[0]);
    console.log(req.body.account);
    console.log(req.body.nickName);

    const userAccount = req.body.account;
    const userName = req.body.nickName;
    if (!(userName.length >= 2 || userName.length < 10)) {
      res.send({ msg: "글자수가 맞지 않습니다." });
    } else {
      await User.create({
        userAddress: req.body.account,
        userName: req.body.nickName,
        profileImg: `/upload/${req.files.profile[0].filename}`,
        backgroundImg: `/upload/${req.files.background[0].filename}`,
      });
      // await User.update(
      //   {
      //     userName: userName,
      //     profileImg: `/upload/${req.files.profile[0].filename}`,
      //     backgroundImg: `/upload/${req.files.background[0].filename}`,
      //   },
      //   { where: { userAddress: userAccount } }
      // );
    }

    console.log("여기는지난다.");
    const user = await User.findOne({
      where: { userAddress: userAccount },
    });
    console.log(user);
    res.cookie(
      // "cookie",
      req.body.account,
      jwt.sign(
        {
          userAddress: user.userAccount,
          userName: user.userName,
        },
        process.env.JWT_KEY,
        { algorithm: "HS256", expiresIn: "300m", issuer: "킹영준" }
      )
    );
    console.log("여긴 못지난다.");
    res.send({ user: user });
  }
);
export default router;
