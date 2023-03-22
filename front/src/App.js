import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/header/Container";
import FooterContainer from "./components/footer/Container";
import TempComp from "./temp/TempComp";
import { useWeb3 } from "./modules/useWeb3";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const { web3, chainId, account, logIn } = useWeb3();
  const [list, setList] = useState([]);
  useEffect(() => {
    // logIn();
    console.log(account);
    if (account) {
      (async () => {
        // console.log(
        //   // await axios.get(
        //   //   "https://ipfs.io/ipfs/QmYeteDyVns19F3PNi1PtYg4X8fQDf9ZGamGkwHV2epxAA"
        //   // )
        // );
        // console.log(
        //   await axios.get(
        //     "https://gateway.pinata.cloud/ipfs/QmYeteDyVns19F3PNi1PtYg4X8fQDf9ZGamGkwHV2epxAA"
        //   )
        // );
        setList(
          (
            await axios.post("http://localhost:8080/api/mylist", {
              from: account,
            })
          ).data
        );
      })();
    } else {
      (async () => {
        // console.log(
        //   // await axios.get(
        //   //   "https://ipfs.io/ipfs/QmYeteDyVns19F3PNi1PtYg4X8fQDf9ZGamGkwHV2epxAA"
        //   // )
        // );
        // console.log(
        //   await axios.get(
        //     "https://gateway.pinata.cloud/ipfs/QmYeteDyVns19F3PNi1PtYg4X8fQDf9ZGamGkwHV2epxAA"
        //   )
        // );
        console.log("이거걸림");
        setList((await axios.post("http://localhost:8080/api/saleList")).data);
      })();
    }
  }, [account]);
  console.log(list);
  return (
    <div className="App">
      <div className="App_innerBox">
        <Routes>
          y{/* 헤더 */}
          <Route path="/*" element={<HeaderContainer />}></Route>
        </Routes>
        <Routes>
          {/*  */}
          <Route
            path="/*"
            element={<TempComp web3={web3} account={account} list={list} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
