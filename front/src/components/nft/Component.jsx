import styled from "styled-components";

const NftComponent = ({ nftImage, nftName }) => {
  return (
    <Nft>
      <div className="Nft_innerBox">
        <div className="Nft_innerBox_img">
          <img src={nftImage} alt="NFT Image" />
        </div>
        <div className="Nft_innerBox_name">
          <div>
            {nftName} 어디에 쓰느냐에 따라 구성을 다르게 해서 다른 컴포넌트를
            추가로 만들 것
          </div>
        </div>
      </div>
    </Nft>
  );
};
export default NftComponent;

const Nft = styled.div`
  border: 1px solid gainsboro;
  border-radius: 20px;
  width: 600px;

  .Nft_innerBox {
    display: flex;

    .Nft_innerBox_img {
      img {
        width: 150px;
      }
    }
    .Nft_innerBox_name {
    }
  }
`;
