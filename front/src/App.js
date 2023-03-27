import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/header/Container";
import FooterContainer from "./components/footer/Container";
import MintContainer from "./components/mint/Container";
// import HomeContainer from "./components/home/Container";
import HomeComponent from "./components/Home/Component";
import SearchContainer from "./components/search/Container";
import RankContainer from "./components/rank/Container";
import BadAddressContainer from "./components/badAddress/Container";
import ActivityContainer from "./components/activity/Container";
import NftDetailContainer from "./components/detail/Container";
import { useWeb3 } from "./modules/useWeb3";
import { useEffect } from "react";
import MypageContainer from "./components/mypage/Container";
import { useDispatch } from "react-redux";
import { accountThunk } from "./modules/account";

function App() {
  const { web3, account, chainId, login } = useWeb3();
  const dispatch = useDispatch();
  useEffect(() => {
    login();

    if (account) {
      dispatch(accountThunk({ account: account }));
    }
    console.log(account);
  }, [account]);
  return (
    <div className="App">
      <div className="App_innerBox">
        <Routes>
          {/* 헤더 */}
          <Route path="/*" element={<HeaderContainer login={login} />}></Route>
        </Routes>
        <div className="App_innerBox_content">
          <Routes>
            {/* 컨텐츠 */}
            <Route path="/" element={<HomeComponent />}></Route>
            <Route path="/mint" element={<MintContainer />}></Route>
            <Route path="/search/*" element={<SearchContainer />}></Route>
            <Route
              path="/rank"
              element={<RankContainer></RankContainer>}
            ></Route>
            <Route
              path="/activity/:account"
              element={<ActivityContainer></ActivityContainer>}
            ></Route>
            <Route
              path="/nft/:nftId"
              element={<NftDetailContainer account={account} web3={web3} />}
            ></Route>
            <Route
              path="/mypage"
              element={<MypageContainer></MypageContainer>}
            ></Route>
            <Route
              path="/*"
              element={<BadAddressContainer></BadAddressContainer>}
            ></Route>
          </Routes>
        </div>

        <Routes>
          {/* 푸터 */}
          <Route path="/*" element={<FooterContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
