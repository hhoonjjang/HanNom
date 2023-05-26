import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";

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
  const dispatch = useDispatch();

  console.log(account);
  const sellNft = async (tokenId, price, account) => {
    dispatch(isLoadingThunk({ isLoading: true }));
    const result = (
      await axios.post("/api/mint/sell", {
        tokenId,
        price,
        account,
      })
    ).data;
    console.log(result);
    await web3.eth.sendTransaction(result.approveObj);
    await web3.eth.sendTransaction(result.obj);
    dispatch(isLoadingThunk({ isLoading: false }));
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
    </li>
  );
};
