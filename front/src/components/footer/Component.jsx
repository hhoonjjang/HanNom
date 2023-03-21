import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterComponent = () => {
  return (
    <Footer>
      <div className="FooterComponent_innerBox">Footer자리입니다.</div>
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2f3238;
  width: 100%;
  height: 220px;
  position: absolute;
  left: 0;
  bottom: 0;
`;
