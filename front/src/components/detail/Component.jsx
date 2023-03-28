import { UserDescription } from "../../ui-components";

const NftDetailComponent = ({ nft, tokenId }) => {
  return <UserDescription nft={nft} idx={tokenId}></UserDescription>;
};
export default NftDetailComponent;
