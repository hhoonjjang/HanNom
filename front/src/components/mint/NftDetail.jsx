import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const NftDetail = () => {
  const a = useParams();
  const account = Object.values(a)[0].split("/")[0];
  const tokenId = Object.values(a)[0].split("/")[1];
  console.log(account, tokenId);
  const [nft, setNft] = useState([]);
  useEffect(() => {
    (async () => {
      const result = (
        await axios.post("/api/mint/detail", {
          account,
          tokenId,
        })
      ).data;
      console.log(result);
      setNft(result);
    })();
    console.log(nft);
  }, [a]);
  return (
    <div>
      <div>판매자:{account}</div>
      <div>토큰아이디:{nft.tokenId}</div>
      <div>{nft.price}ETH</div>
      <div>
        <img src={nft.image}></img>
      </div>
    </div>
  );
};
