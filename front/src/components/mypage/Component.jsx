import { NftMyPage } from "../../ui-components";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const MypageComponent = ({ web3 }) => {
  const [myList, setMyList] = useState();
  const [userName, setUserName] = useState({});
  const [userData, setUserData] = useState();
  useEffect(() => {
    const from = document.cookie.split("=")[0];

    console.log("from", from);
    (async () => {
      // const cookie = (
      //   await axios.post("http://localhost:8080/api/user/cookieInfo", {
      //     from: from,
      //   })
      // ).data;
      // console.log(cookie);
      const data = (
        await axios.post("http://localhost:8080/api/mint/mylist", {
          from: from,
          cookie: document.cookie,
        })
      ).data;
      const name = (
        await axios.post("http://localhost:8080/api/user/getUser", {
          from: from,
        })
      ).data;
      // console.log(name.userName);
      console.log(name);
      setUserName(name.userName);
      setUserData(name);
      setMyList(data);
    })();
  }, []);
  console.log(myList);
  return (
    <Mypage>
      <NftMyPage
        list={myList}
        web3={web3}
        userName={userName}
        userdata={userData}
      ></NftMyPage>
    </Mypage>
  );
};

export default MypageComponent;

const Mypage = styled.div`
  display: flex;
  justify-content: center;
`;