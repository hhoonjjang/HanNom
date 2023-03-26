import { Router } from "express";
import dotenv from "dotenv";
import multer from "multer";
import pinataSDK from "@pinata/sdk";
import { Readable } from "stream";
import Web3 from "web3";
import axios from "axios";
import NftAbi from "../contracts/artifacts/NftToken.json" assert { type: "json" };
import SaleAbi from "../contracts/artifacts/SaleToken.json" assert { type: "json" };
import { Nft } from "../models/index.js";
import fs from "fs";
const router = Router();
const web3 = new Web3("http://ganache.test.errorcode.help:8545");
dotenv.config();
const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);

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

router.post("/detail", async (req, res) => {
  console.log(req.body);
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  try {
    const test = await deployed.methods.getSaleTokenList().call();
    let nft;
    for (let i = 0; i < test.length; i++) {
      if (test[i].tokenId == req.body.tokenId) {
        nft = test[i];
        break;
      }
    }
    console.log("오류확인찾아라1");

    const { name, description, image } = (
      await axios.get(
        nft.tokenURI.replace("gateway.pinata.cloud", "block7.mypinata.cloud")
      )
    ).data;
    console.log("오류확인찾아라2");

    const data = {
      tokenId: nft.tokenId,
      price: web3.utils.fromWei(nft.Price),
      image: image.replace("gateway.pinata.cloud", "block7.mypinata.cloud"),
    };
    console.log("오류확인찾아라3");

    console.log(data.price);
    res.send(data);
  } catch (error) {
    console.log("오류확인찾아라4");
    console.log(error);
  }
});

router.post("/sellList", async (req, res) => {
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  const deployedN = new web3.eth.Contract(NftAbi.abi, process.env.NFT_CA);

  let data = [];
  try {
    const tempArr = await deployed.methods.getSaleTokenList().call();
    if (tempArr.length > 0) {
      for (let i = 0; i < tempArr.length; i++) {
        console.log(tempArr[i].Price);
        const price = web3.utils.fromWei(tempArr[i].Price);
        console.log(price);
        const seller = await deployedN.methods
          .ownerOf(tempArr[i].tokenId)
          .call();
        console.log(seller);
        const { name, description, image } = (
          await axios.get(
            tempArr[i].tokenURI.replace(
              "gateway.pinata.cloud",
              "block7.mypinata.cloud"
            )
          )
        ).data;
        data.push({
          seller: seller,
          tokenId: tempArr[i].tokenId,
          name,
          description,
          price: price,
          image: image.replace("gateway.pinata.cloud", "block7.mypinata.cloud"),
        });
      }
    }
    res.send(data);
  } catch (error) {
    console.log("에러");

    res.send([]);
  }
});

router.post("/sell", async (req, res) => {
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  const deployedN = new web3.eth.Contract(NftAbi.abi, process.env.NFT_CA);
  const price = web3.utils.toWei(req.body.price);
  console.log(price);
  console.log(req.body.tokenId);
  const nft = await deployed.methods
    .SalesToken(req.body.tokenId, price)
    .encodeABI();
  const approve = await deployedN.methods
    .setApprovalForAll(process.env.SALE_CA, true)
    .encodeABI();
  const approveObj = {
    to: "",
    from: "",
    data: "",
  };
  const obj = {
    to: "",
    from: "",
    data: "",
  };
  approveObj.to = process.env.NFT_CA;
  approveObj.from = req.body.account;
  approveObj.data = approve;
  obj.to = process.env.SALE_CA;
  obj.from = req.body.account;
  obj.data = nft;
  console.log(approveObj);
  res.send({ obj, approveObj });
});

router.post("/registList", async (req, res) => {
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  let data = [];
  try {
    console.log("하이");

    const tempArr = await deployed.methods.getOwnerTokens(req.body.from).call();

    console.log(tempArr);
    if (tempArr.length > 0) {
      for (let i = 0; i < tempArr.length; i++) {
        const { name, description, image } = (
          await axios.get(
            tempArr[i].tokenURI.replace(
              "gateway.pinata.cloud",
              "block7.mypinata.cloud"
            )
          )
        ).data;
        data.push({
          tokenId: tempArr[i].tokenId,
          name,
          description,
          image: image.replace("gateway.pinata.cloud", "block7.mypinata.cloud"),
        });
      }
    }
  } catch (error) {
    // console.log(error);
    res.send([]);
  }
  res.send(data);
});

router.post("/mint", upload.single("file"), async (req, res) => {
  const { name, description } = req.body;
  console.log(name);
  console.log(description);
  console.log(req.file);
  console.log(req.body);
  console.log("오류를 찾아라");
  const img = fs.readFileSync("./upload/" + req.file.filename);
  console.log(img);
  try {
    console.log("오류를 찾아라");

    const imgResult = await pinata.pinFileToIPFS(Readable.from(img), {
      pinataMetadata: {
        name: Date.now().toString(),
      },
      pinataOptions: {
        cidVersion: 0,
      },
    });
    console.log("오류를 찾아라");

    console.log(imgResult);
    if (imgResult.isDuplicate) {
      console.log("같은이미지");
      console.log("같은이미지");
    }
    console.log("해위");
    const jsonResult = await pinata.pinJSONToIPFS(
      {
        name,
        description,
        //   image: "https://getway.pinata.cloud/ipfs/" + imgResult.IpfsHash,
        image: `https://gateway.pinata.cloud/ipfs/${imgResult.IpfsHash}`,
      },
      {
        pinataMetadata: {
          name: Date.now().toString() + ".json",
        },
        pinataOptions: {
          cidVersion: 0,
        },
      }
    );
    console.log("해위");
    //   console.log(jsonResult);
    console.log("해위");

    const deployed = new web3.eth.Contract(NftAbi.abi, process.env.NFT_CA);

    const obj = {
      nonce: 0,
      to: "",
      from: "",
      data: "",
    };
    console.log(req.body.from);
    obj.nonce = await web3.eth.getTransactionCount(req.body.from);
    console.log("해위냥");
    obj.to = process.env.NFT_CA;
    obj.from = req.body.from;
    obj.data = deployed.methods.safeMint(jsonResult.IpfsHash).encodeABI();
    await Nft.create({
      nftImg: `/upload/${req.file.filename}`,
      nftName: name,
      nftDescription: description,
    });
    res.send(obj);
  } catch (error) {
    console.log(error);
    res.end();
  }
});

router.post("/mylist", async (req, res) => {
  try {
    const data = await Nft.findAll();
    router.get("/", async (req, res) => {
      fs.readdir("/upload", (err, imgData) => {
        res.send(data);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/saleList", async (req, res) => {
  try {
    const data = await Nft.findAll();
    res.send(data);
    router.get("/", async (req, res) => {
      fs.readdir("/upload", (err, imgData) => {});
    });
  } catch (error) {}
});

export default router;
