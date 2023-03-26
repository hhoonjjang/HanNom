import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer1 } from "../../ui-components";

const FooterComponent = () => {
  return (
    <Footer>
      <Footer1 />
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0;
  background-color: gainsboro;
  // bottom: 0;
`;
