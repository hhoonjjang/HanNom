import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const NftDetail = ({ account, web3 }) => {
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
  const buyNft = async (tokenId, account) => {
    const result = (
      await axios.post("http://localhost:8080/api/mint/buy", {
        tokenId,
        account,
      })
    ).data;
    console.log(result);
    console.log(web3);
    await web3.eth.sendTransaction(result);
  };
  return (
    <div>
      <div>판매자:{seller}</div>
      <div>토큰아이디:{nft.tokenId}</div>
      <div>{nft.price}ETH</div>
      <div>
        <img src={nft.image}></img>
      </div>
      <button
        onClick={() => {
          buyNft(nft.tokenId, account);
        }}
      >
        구매버튼
      </button>
    </div>
  );
};
