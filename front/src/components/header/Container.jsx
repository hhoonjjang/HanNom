import HeaderComponent from "./Component.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";

const HeaderContainer = ({ login }) => {
  // useEffect(() => {
  //   (async () => {
  //     const data = (await axios.post("http://localhost:8080/account", account))
  //       .data.accountId;
  //   })();
  // }, [account]);

  return <HeaderComponent login={login}></HeaderComponent>;
};

export default HeaderContainer;
