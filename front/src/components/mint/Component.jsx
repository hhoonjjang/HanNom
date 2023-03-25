import styled from "styled-components";
import { NFTCreate1, NFTCreate2, NFTMint } from "../../ui-components";
const MintComponent = () => {
  return (
    <Mint>
      <div className="Mint_innerBox">
        <NFTMint></NFTMint>
      </div>
    </Mint>
  );
};

export default MintComponent;

const Mint = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
