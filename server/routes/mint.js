import { Router } from "express";
import dotenv from "dotenv";
import multer from "multer";
import pinataSDK from "@pinata/sdk";
import { Readable } from "stream";
import Web3 from "web3";
import axios from "axios";
import NftAbi from "../contracts/artifacts/NftToken.json" assert { type: "json" };
import SaleAbi from "../contracts/artifacts/SaleToken.json" assert { type: "json" };
import { Nft, User } from "../models/index.js";
import fs from "fs";
const router = Router();
const web3 = new Web3("http://ganache.test.errorcode.help:8545");
// const web3 = new Web3(
//   "wss://goerli.infura.io/ws/v3/2370d723f2b24ee69ca1d052c7a0e099"
// );
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
    const tempUser = await User.findOne({
      where: { userAddress: req.body.from },
    });
    console.log("시험", "11");
    const tempArr = await deployed.methods.getTokenList().call();
    console.log("시험", "12");

    let tokenIdx;
    if (tempArr.length > 0) {
      tokenIdx = tempArr.length;
    } else tokenIdx = 0;
    const tempToken = await Nft.create({
      tokenId: tokenIdx,
      nftImg: `/upload/${req.file.filename}`,
      nftName: name,
      nftDescription: description,
      state: "mint",
      // userName: req.body.from,
    });

    tempUser.addNfts(tempToken);
    res.send(obj);
  } catch (error) {
    console.log(error);
    res.end();
  }
});
router.post("/comparedb", async (req, res) => {
  console.log(req.body);
  const deployed = new web3.eth.Contract(NftAbi.abi, process.env.NFT_CA);
  try {
    const tempArr = await deployed.methods.getTokenList().call();

    console.log("성공2");
    let curheight = await Nft.findOne({
      order: [["id", "DESC"]],
    });
    console.log("성공1");
    console.log("curheight는", curheight.id);
    console.log("컴페어디비에러1");
    console.log("tempArr", tempArr.length);
    if (curheight == null) {
      for (let i = 0; i < tempArr.length; i++) {
        // const { name, description, image } = (
        //   await axios.get(
        //     tempArr[i].tokenURI.replace(
        //       "gateway.pinata.cloud",
        //       "block7.mypinata.cloud"
        //     )
        //   )
        // ).data;
        await axios
          .get(
            tempArr[i].tokenURI.replace(
              "gateway.pinata.cloud",
              "block7.mypinata.cloud"
            )
          )
          .then(async ({ data }) => {
            console.log(data);
            console.log("아이", i + 1);
            console.log(fs.readFileSync(data.image));
            await Nft.create({
              id: i + 1,
              tokenId: i,
              nftName: data.name,
              nftDescription: data.description,
              nftImg: data.image,
            });
          });
        console.log("중간점검");
        // await Nft.create({
        //   id: i,
        //   nftHash: i,
        //   nftName: name,
        //   nftDescription: description,
        //   nftImg: image,
        // });
        // console.log(id:i,name, description, image);
      }
    } else {
      console.log("else문");
      if (tempArr.length > curheight.id) {
        console.log("else문if");
        for (let i = curheight.id; i < tempArr.length + 1; i++) {
          await axios
            .get(
              tempArr[i].tokenURI.replace(
                "gateway.pinata.cloud",
                "block7.mypinata.cloud"
              )
            )
            .then(async ({ data }) => {
              console.log(data);
              console.log("아이333", i + 1);
              console.log(data.image.split("ipfs/")[1]);
              const baseURI = process.cwd();
              console.log(baseURI);
              const cid = data.image.split("ipfs/")[1];
              fs.writeFileSync(`${baseURI}/upload`, data.image);
              const buffer1 = Buffer.from(data.image);
              const buffer = Buffer.from(cid);
              console.log("버퍼1:", buffer1);

              console.log("버퍼2:", buffer);
              await Nft.create({
                id: i + 1,
                tokenId: i,
                nftName: data.name,
                nftDescription: data.description,
                nftImg: data.image,
              });
            });
        }
      }
    }
    console.log("완성");
    res.end();
  } catch (error) {
    console.log("컴페어디비에러");
    res.end();
  }
});

router.post("/registList", async (req, res) => {
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  let data = [];
  try {
    console.log(req.body.from);

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

router.post("/cancel", async (req, res) => {
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  try {
    const cancel = await deployed.methods
      .cancelSaleToken(req.body.tokenId)
      .encodeABI();
    const obj = {
      to: "",
      from: "",
      data: "",
    };
    obj.to = process.env.SALE_CA;
    obj.from = req.body.account;
    obj.data = cancel;
    res.send(obj);
  } catch (error) {
    console.log("에러");
    res.end();
  }
});

router.post("/detail", async (req, res) => {
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

    const { name, description, image } = (
      await axios.get(
        nft.tokenURI.replace("gateway.pinata.cloud", "block7.mypinata.cloud")
      )
    ).data;

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
  console.log(deployed.methods);
  let data = [];
  try {
    const tempArr = await deployed.methods.getSaleTokenList().call();
    console.log(tempArr);
    console.log("하이2");

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
    console.log("셀리스트에러");

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

router.post("/buy", async (req, res) => {
  console.log(req.body);
  const deployed = new web3.eth.Contract(SaleAbi.abi, process.env.SALE_CA);
  const price = web3.utils.toWei(req.body.price).toString(16);
  console.log(typeof price);
  const temp = (+price).toString(16);

  // console.log(price, "가격");
  // console.log(temp);
  try {
    const buy = await deployed.methods
      .PurchaseToken(req.body.tokenId)
      .encodeABI();
    const obj = {
      to: "",
      from: "",
      data: "",
      value: "",
    };
    obj.to = process.env.SALE_CA;
    obj.from = req.body.account;
    obj.data = buy;
    obj.value = "0x" + temp;
    // obj.value =
    console.log(obj.value);
    res.send(obj);
  } catch (error) {
    console.log("에러");
    res.end();
  }
});

router.post("/mylist", async (req, res) => {
  console.log("지나갑니다아아아");
  try {
    console.log("req.body.from이 무ㅡㅓㄹ까요용", req.body.from);
    const data = await Nft.findAll({ where: { userAddress: req.body.from } });

    res.send(data);
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

router.post("/sellComplete", async (req, res) => {
  try {
    console.log(req.body.tokenId);
    const data = await Nft.update(
      { state: "selling" },
      { where: { tokenId: req.body.tokenId } }
    );
    console.log("data는 두구두구", data);
    res.send({ data: data, msg: "sell 등록완료" });
  } catch (error) {
    res.end();
  }
});

router.post("/cancelComplete", async (req, res) => {
  try {
    console.log(req.body.tokenId);
    const data = await Nft.update(
      { state: "mint" },
      { where: { tokenId: req.body.tokenId } }
    );
    res.send({ data: data, msg: "sell 취소완료" });
  } catch (error) {
    res.end();
  }
});

export default router;
