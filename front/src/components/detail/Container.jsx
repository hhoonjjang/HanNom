import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NftDetailComponent from "./Component.jsx";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../../modules/isLoading.js";

const NftDetailContainer = ({ web3, account }) => {
  const a = useParams();
  const seller = Object.values(a)[0].split("/")[0];
  const tokenId = Object.values(a)[0].split("/")[1];
  const [nft, setNft] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const result = (
        await axios.post("/api/mint/nftDetail", {
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
    dispatch(isLoadingThunk({ isLoading: true }));
    const result = (
      await axios.post("/api/mint/buy", {
        tokenId,
        account,
        price,
      })
    ).data;
    console.log(result.value);
    await web3.eth.sendTransaction(result);
    dispatch(isLoadingThunk({ isLoading: false }));
  };
  return (
    <>
      <NftDetailComponent nft={nft} tokenId={tokenId} web3={web3} />
    </>
  );
};
export default NftDetailContainer;
