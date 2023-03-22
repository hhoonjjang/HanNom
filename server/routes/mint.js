import { Router } from "express";
import dotenv from "dotenv";
import multer from "multer";
import pinataSDK from "@pinata/sdk";
import { Readable } from "stream";
import Web3 from "web3";
import axios from "axios";

import NftAbi from "../contracts/artifacts/NftToken.json" assert { type: "json" };
import SaleAbi from "../contracts/artifacts/SaleToken.json" assert { type: "json" };
const router = Router();
const web3 = new Web3("http://ganache.test.errorcode.help:8545");
dotenv.config();
const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);
const upload = multer();

router.post("/registList", async (req, res) => {
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);

  const tempArr = await deployed.methods.getOwnerTokens(req.body.from).call();
  let data = [];
  for (let i = 0; i < tempArr.length; i++) {
    try {
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
    } catch (error) {
      // console.log(error);
    }
  }
  console.log(data);
  res.send(data);
  //   res.end();
});
router.post("/list", async (req, res) => {
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  let data = [];
  if (req.body.from) {
    try {
      const tempArr = await deployed.methods
        .getOwnerTokens(req.body.from)
        .call();
      console.log("템프어레이", tempArr);
      for (let i = 0; i < tempArr.length; i++) {
        try {
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
            price: tempArr[i].price,
            name,
            description,
            image: image.replace(
              "gateway.pinata.cloud",
              "block7.mypinata.cloud"
            ),
          });
        } catch (error) {
          // console.log(error);
        }
      }
    } catch (error) {}
  } else {
    try {
      const tempArr = await deployed.methods.getSaleTokenList().call();
      console.log("템프어레이", tempArr);
      for (let i = 0; i < tempArr.length; i++) {
        try {
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
            price: tempArr[i].price,
            name,
            description,
            image: image.replace(
              "gateway.pinata.cloud",
              "block7.mypinata.cloud"
            ),
          });
        } catch (error) {
          // console.log(error);
        }
      }
    } catch (error) {}
  }
  console.log(data);
  res.send(data);
});
router.post("/mint", upload.single("file"), async (req, res) => {
  const { name, description } = req.body;
  console.log(name);
  console.log(description);
  console.log(req.file);
  console.log(req.body);
  try {
    const imgResult = await pinata.pinFileToIPFS(
      Readable.from(req.file.buffer),
      {
        pinataMetadata: {
          name: Date.now().toString(),
        },
        pinataOptions: {
          cidVersion: 0,
        },
      }
    );
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

    res.send(obj);
  } catch (error) {
    console.log(error);
    res.end();
  }
});
export default router;
