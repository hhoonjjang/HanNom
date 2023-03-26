import styled from "styled-components";
import {
  UserInfoCom1,
  UserInfoCom2,
  UserInfoCom3,
  YellowButton,
} from "../../ui-components";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeComponent = ({}) => {
  const [user, setUser] = useState();
  const info = async () => {
    const [_account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("_account : ", _account);
    const userInfo = (
      await axios.post("http://localhost:8080/api/user/login", {
        account: _account,
      })
    ).data;
    setUser(userInfo);
    console.log(user);
  };
  useEffect(() => {
    info();
  }, []);

  return (
    <Home>
      <button
        onClick={() => {
          info();
        }}
      >
        test
      </button>
      <InfoTestComp>
        {user ? (
          <div>
            <div>userAddress :{user.userAddress}</div>
            <div>userName :{user.userName}</div>{" "}
            <div>
              profileImg:
              <img src={"http://localhost:8080" + user.profileImg} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </InfoTestComp>
      <div className="Home_innerBox">
        <UserInfoCom1></UserInfoCom1>
        <MarginStyle1 />
        <div className="Home_innerBox_part2">
          <UserInfoCom2></UserInfoCom2>
          <UserInfoCom2></UserInfoCom2>
          <UserInfoCom2></UserInfoCom2>
        </div>
        <MarginStyle2 />
        <UserInfoCom3></UserInfoCom3>
        <MarginStyle1 />
        <UserInfoCom3></UserInfoCom3>
        <MarginStyle1 />
        <UserInfoCom3></UserInfoCom3>
        <MarginStyle1 />
        <YellowButton />
      </div>
    </Home>
  );
};

export default HomeComponent;

const Home = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Home_innerBox {
    .Home_innerBox_part2 {
      display: flex;
      gap: 100px;
      justify-content: space-between;
    }
  }
`;

const MarginStyle1 = styled.div`
  margin-top: 100px;
`;
const MarginStyle2 = styled.div`
  margin-top: 50px;
`;

const InfoTestComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: black;
`;
