import { UserDescription } from "../../ui-components";

const NftDetailComponent = ({ nft, tokenId, web3 }) => {
  return (
    <UserDescription nft={nft} idx={tokenId} web3={web3}></UserDescription>
  );
};
export default NftDetailComponent;
