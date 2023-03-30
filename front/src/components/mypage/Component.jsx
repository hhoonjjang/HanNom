import { NftMyPage } from "../../ui-components";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const MypageComponent = ({ web3 }) => {
  const [myList, setMyList] = useState();
  const [userName, setUserName] = useState({});
  const [userData, setUserData] = useState();
  const [from, setFrom] = useState();
  const params = useParams();

  // console.log("123easdasd", from);

  const setStateMethod = (from) => {
    // const from = document.cookie.split("=")[0];
    const tempAddress = document.cookie.split("=")[0];
    if (from == tempAddress) {
      (async () => {
        const data = (
          await axios.post("/api/mint/mylist", {
            from: from,
            cookie: document.cookie,
          })
        ).data;
        const name = (
          await axios.post("/api/user/getUser", {
            from: from,
          })
        ).data;
        // console.log(name.userName);
        console.log(name);
        setUserName(name.userName);
        setUserData(name);
        setMyList(data);
      })();
    } else {
      (async () => {
        const name = (
          await axios.post("/api/user/getUser", {
            from: from,
          })
        ).data;
        // console.log(name.userName);
        console.log(name);
        setUserName(name.userName);
        setUserData(name);
      })();
    }
    console.log("from", from);
  };

  useEffect(() => {
    const tempA = params[Object.keys(params)[0]];

    setStateMethod(tempA);
  }, []);

  console.log(myList);
  return (
    <Mypage>
      <NftMyPage
        list={myList}
        web3={web3}
        userName={userName}
        userdata={userData}
        setStateMethod={setStateMethod}
      ></NftMyPage>
    </Mypage>
  );
};

export default MypageComponent;

const Mypage = styled.div`
  display: flex;
  justify-content: center;
`;
