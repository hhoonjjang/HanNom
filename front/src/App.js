import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/header/Container";
import FooterContainer from "./components/footer/Container";
import { Mint } from "./components/mint/Mint";
import styled from "styled-components";
import { useWeb3 } from "./modules/useWeb3";
import { useEffect, useState } from "react";
import axios from "axios";
import { List } from "./components/mint/List";
import { SaleList } from "./components/mint/SaleList";
import { NftDetail } from "./components/mint/NftDetail";
function App() {
  const { web3, account, chainId, logIn } = useWeb3();
  const [list, setList] = useState([]);
  const [saleList, setSaleList] = useState([]);
  useEffect(() => {
    logIn();
    console.log(account);
    if (account) {
      console.log("시험");
      (async () => {
        const result = (
          await axios.post("http://localhost:8080/api/mint/registlist", {
            from: account,
          })
        ).data;
        console.log(result);
        setList(result);
      })();
    }
  }, [account]);
  useEffect(() => {
    (async () => {
      console.log("시작");
      const result = (
        await axios.post("http://localhost:8080/api/mint/sellList")
      ).data;
      // console.log(result);
      setSaleList(result);
    })();
  }, []);

  return (
    <div className="App">
      <div className="App_innerBox">
        <Routes>
          {/* 헤더 */}
          <Route path="/*" element={<HeaderContainer />}></Route>
        </Routes>
        <Routes>{/*  */}</Routes>
        <Routes>
          <Route path="/" element={<SaleList list={saleList} />} />
          <Route path="/nft/*" element={<NftDetail />}></Route>''
        </Routes>
        <Mint web3={web3} account={account} />
        <List list={list} web3={web3} account={account} />
        <Routes>
          {/* 푸터 */}
          <Route path="/*" element={<FooterContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
