import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NftDetailComponent from "./Component.jsx";

const NftDetailContainer = ({ web3, account }) => {
  const a = useParams();
  const seller = Object.values(a)[0].split("/")[0];
  const tokenId = Object.values(a)[0].split("/")[1];
  const [nft, setNft] = useState([]);
  useEffect(() => {
    (async () => {
      const result = (
        await axios.post("http://localhost:8080/api/mint/detail", {
          seller,
          tokenId,
        })
      ).data;
      console.log(result);
      setNft(result);
    })();
    console.log(nft);
  }, [a]);
  const buyNft = async (tokenId, account, price) => {
    const result = (
      await axios.post("http://localhost:8080/api/mint/buy", {
        tokenId,
        account,
        price,
      })
    ).data;
    console.log(result.value);
    await web3.eth.sendTransaction(result);
  };
  return (
    <>
      <NftDetailComponent nft={nft} tokenId={tokenId} />
    </>
  );
};
export default NftDetailContainer;
