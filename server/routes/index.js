import { Router } from "express";
import NftAbi from "../contracts/artifacts/NftToken.json" assert { type: "json" };
import SaleAbi from "../contracts/artifacts/SaleToken.json" assert { type: "json" };
import pinataSDK from "@pinata/sdk";
import multer from "multer";
import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();
import axios from "axios";
import { Readable } from "stream";
const web3 = new Web3("http://ganache.test.errorcode.help:8545");

const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);
const router = Router();
const upload = multer();
router.post("/list", async (req, res) => {
  console.log(req.body.from);
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);

  let data = [];
  if (req.body.from) {
    try {
      const tempArr = await deployed.methods
        .getOwnerTokens(req.body.from)
        .call();
      console.log(tempArr);
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
        } catch (error) {}
      }
    } catch (error) {}
  } else {
    try {
      const tempArr = await deployed.methods.getSaleTokenList().call();
      console.log(tempArr);
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
        } catch (error) {}
      }
    } catch (error) {}
  }
  res.send(data);
});

router.post("/mintList", async (req, res) => {
  console.log("!@#!@#!@#");
  const deployed = new web3.eth.Contract(NftAbi.abi, process.env.NFT_CA);

  let data = [];
  if (req.body.from) {
    try {
      console.log("123123");
      const tempArr = await deployed.methods.getTokenList(req.body.from).call();
      console.log("dwdsdawd");
      console.log(tempArr);
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
        } catch (error) {}
      }
    } catch (error) {}
  } else {
    try {
      const tempArr = await deployed.methods.getTokenList(req.body.from).call();
      console.log(tempArr);
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
        } catch (error) {}
      }
    } catch (error) {}
  }
  res.send(data);
});

router.post("/mint", upload.single("file"), async (req, res) => {
  const { name, description } = req.body;

  const imgResult = await pinata.pinFileToIPFS(Readable.from(req.file.buffer), {
    pinataMetadata: {
      name: Date.now().toString(),
    },
    pinataOptions: {
      cidVersion: 0,
    },
  });

  if (imgResult.isDuplicate) {
    console.log("같은 이미지!");
  }

  const jsonResult = await pinata.pinJSONToIPFS(
    {
      name,
      description,
      //   image: "https://gateway.pinata.cloud/ipfs/" + imgResult.IpfsHash,
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
  console.log(jsonResult);
  try {
    const deployed = await new web3.eth.Contract(
      NftAbi.abi,
      process.env.NFT_CA
    );

    const obj = {
      nonce: 0,
      to: "",
      from: "",
      data: "",
    };

    obj.nonce = await web3.eth.getTransactionCount(req.body.from);
    console.log("sdlakwhjdkljashdjkas");
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
