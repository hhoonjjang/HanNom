import { useEffect } from "react";
import styled from "styled-components";

import { HeaderTop } from "../../ui-components";

const HeaderComponent = () => {
  return (
    <Header>
      <HeaderTop />
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  position: sticky;
  background-color: white;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  z-index: 100;
`;
