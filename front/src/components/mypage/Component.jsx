import { NftMyPage } from "../../ui-components";
import styled from "styled-components";

const MypageComponent = () => {
  return (
    <Mypage>
      <NftMyPage></NftMyPage>
    </Mypage>
  );
};

export default MypageComponent;

const Mypage = styled.div`
  display: flex;
  justify-content: center;
`;
