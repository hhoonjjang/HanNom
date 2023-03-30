import axios from "axios";
import { Link } from "react-router-dom";
export const SaleList = ({ list }) => {
  console.log(list);
  return (
    <>
      <div>마이페이지 팔기한 후 토큰들</div>
      <ul>
        {list.map((item, idx) => (
          <Item item={item} key={`item-${idx}`} />
        ))}
      </ul>
    </>
  );
};

const Item = ({
  item: { seller, tokenId, name, description, price, image },
}) => {
  //   const nftDetail = async (tokenId) => {
  //     console.log(tokenId);
  //     await axios.get("/api/mint/nftDetail", {
  //       tokenId,
  //     });
  //   };
  console.log(image);
  return (
    <Link to={`nft/${seller}/${tokenId}`}>
      <li
        onClick={() => {
          //   nftDetail(tokenId);
        }}
      >
        <div>판매자:{seller}</div>
        <div>{tokenId}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>
          <img src={image} />
        </div>
        <div>{price}ETH</div>
      </li>
    </Link>
  );
};
