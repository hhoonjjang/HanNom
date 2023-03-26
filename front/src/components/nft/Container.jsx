import axios from "axios";
import { useEffect } from "react";
import NftComponent from "./Component";

const NftContainer = ({ nftImage, nftName }) => {
  return <NftComponent nftImage={nftImage} nftName={nftName}></NftComponent>;
};

export default NftContainer;
