import HeaderComponent from "./Component.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";

const HeaderContainer = () => {
  // useEffect(() => {
  //   (async () => {
  //     const data = (await axios.post("/account", account))
  //       .data.accountId;
  //   })();
  // }, [account]);

  return <HeaderComponent></HeaderComponent>;
};

export default HeaderContainer;
