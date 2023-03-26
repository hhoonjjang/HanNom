import styled from "styled-components";
import {
  UserInfoCom1,
  UserInfoCom2,
  UserInfoCom3,
  YellowButton,
} from "../../ui-components";

const HomeComponent = ({}) => {
  return (
    <Home>
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
