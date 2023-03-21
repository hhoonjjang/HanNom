import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import Web3 from "web3";

const TempComp = ({ web3, account, list }) => {
  const [NftName, setName] = useState("");
  const [NftDescription, setDescription] = useState("");
  const [file, setFile] = useState();
  const [value, setValue] = useState(0);
  const [img, setImg] = useState("");

  const nameInput = useCallback((e) => {
    setName(e.currentTarget.value);
  }, []);

  const descriptionInput = useCallback((e) => {
    setDescription(e.currentTarget.value);
  }, []);
  const valueInput = useCallback((e) => {
    setValue(e.currentTarget.value);
    console.log(value);
  }, []);

  const fileChange = useCallback((e) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setFile(e.currentTarget.files[0]);

      const reader = new FileReader();
      // 파일을 읽는 객체를 만든다.
      reader.readAsDataURL(e.currentTarget.files[0]);
      // 파일 내용을 가지고 element에서 띄울 수 있게 준비하도록 시킨다.
      reader.onload = () => {
        // 준비가 끝나면
        if (reader.result) {
          setImg(reader.result);
        }
      };
    }
  }, []);

  const mint = async () => {
    if (!NftName || !NftDescription || !file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", NftName);
    formData.append("description", NftDescription);
    formData.append("from", account);
    console.log(account);
    const result = (
      await axios.post("http://localhost:8080/api/mint", formData)
    ).data;
    web3.eth.sendTransaction(result);
    console.log(result);
  };
  const sell = async () => {};

  return (
    <div>
      <input type="text" onInput={nameInput} placeholder={"NFT Name"} />
      <input
        type="text"
        onInput={descriptionInput}
        placeholder={"NFT Description"}
      />
      <input type="file" onChange={fileChange} />
      {img && (
        <div>
          <img src={img.toString()} />
        </div>
      )}
      <button onClick={mint}>Mint</button>
      <input type="number" onInput={valueInput} />
      <button onClick={sell}>Sell</button>

      <ul>
        {list.map((item, idx) => (
          <Item item={item} key={`item-${idx}`} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item: { name, description, image, tokenId } }) => {
  return (
    <li>
      <div>name :{name}</div>
      <div>description :{description}</div>

      <div>tokenId :{tokenId}</div>

      <div>
        <img src={image} />
      </div>
    </li>
  );
};

export default TempComp;
