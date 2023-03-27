import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/header/Container";
import FooterContainer from "./components/footer/Container";
import GroupRegistContainer from "./components/groupRegist/Container";
import MintContainer from "./components/mint/Container";
import GroupContainer from "./components/group/Container";
// import HomeContainer from "./components/home/Container";
import HomeComponent from "./components/Home/Component";
import WalletContainer from "./components/wallet/Container";
import SearchContainer from "./components/search/Container";
import RankContainer from "./components/rank/Container";
import BadAddressContainer from "./components/badAddress/Container";
import ActivityContainer from "./components/activity/Container";
import NftDetailContainer from "./components/detail/Container";
import { useWeb3 } from "./modules/useWeb3";
import { useEffect } from "react";
function App() {
  const { web3, account, chainId, login } = useWeb3();
  useEffect(() => {
    login();
  }, []);
  return (
    <div className="App">
      <div className="App_innerBox">
        <Routes>
          {/* 헤더 */}
          <Route path="/*" element={<HeaderContainer login={login} />}></Route>
        </Routes>

        <Routes>
          {/* 컨텐츠 */}
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/groupRegist" element={<GroupRegistContainer />}></Route>
          <Route path="/group/:groupId" element={<GroupContainer />}></Route>
          <Route path="/mint" element={<MintContainer />}></Route>
          <Route path="/wallet/:account" element={<WalletContainer />}></Route>
          <Route path="/search/*" element={<SearchContainer />}></Route>
          <Route path="/rank" element={<RankContainer></RankContainer>}></Route>
          <Route
            path="/activity/:account"
            element={<ActivityContainer></ActivityContainer>}
          ></Route>
          <Route
            path="/nft/*"
            element={<NftDetailContainer account={account} web3={web3} />}
          ></Route>
          <Route
            path="/*"
            element={<BadAddressContainer></BadAddressContainer>}
          ></Route>
        </Routes>

        <Routes>
          {/* 푸터 */}
          <Route path="/*" element={<FooterContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
