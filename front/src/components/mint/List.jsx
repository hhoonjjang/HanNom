import { useState } from "react";
import axios from "axios";
export const List = ({ list, account, web3 }) => {
  // const [list, setList] = useState<Array<nftData>>([]);
  console.log(list);
  return (
    <>
      <div>마이페이지 팔기전 내가 민트(등록)한 토큰들</div>
      <ul>
        {list.map((item, idx) => (
          <Item item={item} account={account} web3={web3} key={`item-${idx}`} />
        ))}
      </ul>
    </>
  );
};

const Item = ({
  item: { tokenId, name, description, image },
  account,
  web3,
}) => {
  const [price, setPrice] = useState("");
  console.log(account);
  const sellNft = async (tokenId, price, account) => {
    const result = (
      await axios.post("http://localhost:8080/api/mint/sell", {
        tokenId,
        price,
        account,
      })
    ).data;

    console.log(result);
    await web3.eth.sendTransaction(result.approveObj);
    await web3.eth.sendTransaction(result.obj);
  };

  const cancelNft = async (tokenId, account) => {
    console.log(tokenId, account);
    const result = (
      await axios.post("http://localhost:8080/api/mint/cancel", {
        tokenId,
        account,
      })
    ).data;
    await web3.eth.sendTransaction(result);
  };

  return (
    <li>
      <div>{tokenId}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <img src={image} />
      </div>
      <input
        type="number"
        onInput={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button
        onClick={() => {
          sellNft(tokenId, price, account);
        }}
      >
        sell
      </button>
      <button
        onClick={() => {
          cancelNft(tokenId, account);
        }}
      >
        판매취소하기
      </button>
    </li>
  );
};
