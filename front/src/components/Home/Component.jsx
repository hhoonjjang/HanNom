import styled from "styled-components";
import {
  UserInfoCom1,
  UserInfoCom2,
  UserInfoCom3,
  YellowButton,
} from "../../ui-components";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeComponent = ({}) => {
  const [saleList, setSaleList] = useState([]);
  const [lastTokenData, setLastToken] = useState();
  const [latestUserData, setLatestUser] = useState();
  const [latestUserTokenData, setLatestUserToken] = useState();
  useEffect(() => {
    (async () => {
      console.log("시작");
      const result = (
        await axios.post("http://localhost:8080/api/mint/sellList")
      ).data;
      console.log(result);
      setSaleList(result);
      const lastToken = (
        await axios.post("http://localhost:8080/api/mint/lastToken")
      ).data;
      // console.log("웨헤헤헤", lastToken);
      setLastToken(lastToken);

      const latestUser = (
        await axios.post("http://localhost:8080/api/user/latestUser")
      ).data;
      console.log("웨헤헤헤", latestUser);
      setLatestUser(latestUser.userArr);
      setLatestUserToken(latestUser.nftArr);
    })();
  }, []);
  console.log(saleList);
  return (
    <Home>
      <div className="Home_innerBox">
        <UserInfoCom1 token={lastTokenData}></UserInfoCom1>
        <MarginStyle1 />

        <div className="Home_innerBox_part2">
          {saleList?.map((item, idx) => (
            <UserInfoCom2 item={item} key={`item은${idx}`}></UserInfoCom2>
          ))}
          {/* <UserInfoCom2></UserInfoCom2> */}
          {/* <UserInfoCom2></UserInfoCom2> */}
        </div>
        <MarginStyle2 />
        {latestUserData ? (
          latestUserData.map((item, index) => {
            console.log("item 한개다", item);
            return (
              <>
                {" "}
                <UserInfoCom3
                  key={`item은${index}`}
                  address={item}
                  addressToken={latestUserTokenData[index]}
                ></UserInfoCom3>
                <MarginStyle1 key={`item은${index}`} />
              </>
            );
          })
        ) : (
          <></>
        )}

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
