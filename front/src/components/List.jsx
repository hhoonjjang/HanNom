import axios from "axios";
import { useEffect, useState } from "react";

export const List = ({ account }) => {
  const [list, setList] = useState < Array < nftData >> [];
  // API Server에서 리스트 받아서 출력하자
  useEffect(() => {
    (async () => {
      console.log(
        await axios.get(
          "https://ipfs.io/ipfs/QmaZxRZjk6hPKtQrEpwcv2Pp8ppGX5uT4CUnQUamU5Nemx"
        )
      );
      setList(
        (await axios.post("http://localhost:8080/api/list", { from: account }))
          .data
      );
    })();
  }, [account]);
  return (
    <ul>
      {list.map((item, idx) => (
        <Item item={item} key={`item-${idx}`} />
      ))}
    </ul>
  );
};

const Item = ({ item: { name, description, image } }) => {
  return (
    <li>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <img src={image} />
      </div>
    </li>
  );
};
