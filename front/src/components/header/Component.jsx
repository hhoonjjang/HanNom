import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useWeb3 } from "../../modules/useWeb3.js";
import tempLogo from "./images/logo.png";
import searchBtn from "./images/main_search_btn.png";
import userIcon from "./images/user-regular.svg";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { web3, chainId, account, logIn } = useWeb3();
  console.log(account);
  return (
    <Header>
      <div className="HeaderComponent_innerBox">
        <LogoBox>
          <Link to="/" element={"메인페이지 컴포넌트"}>
            <img src={tempLogo} />
          </Link>
        </LogoBox>
        <SearchBox>
          <div className="SearchBox_innerBox">
            <input
              type="text"
              className="SearchBox_innerBox_input"
              placeholder="input the text"
              // onKeyUp={() => {
              //   if (window.event.keyCode == 13) {
              //     if (searchData.match(/\S/g)) {

              //     } else {
              //       alert("검색어를 입력하세요");
              //     }
              //   }
              // }}
            />
            <div
              className="SearchBox_innerBox_img"
              // onClick={() => {
              //   if (searchData.match(/\S/g)) {

              //     return;
              //   } else {
              //     alert("검색어를 입력하세요");
              //   }
              // }}
            >
              <img src={searchBtn} alt="검색한다" />
            </div>
          </div>
        </SearchBox>
        <AccountBox>
          {web3 ? (
            // 메타마스크에 로그인되어 있는지 확인

            // 메타마스크에 로그인되어 있다면

            <div>
              {account}
              <img src={userIcon} />
            </div>
          ) : (
            // 메타마스크에 로그인이 되어있지 않다면
            <div>
              <button
                onClick={() => {
                  logIn();
                }}
              >
                Login
              </button>
            </div>
          )}
        </AccountBox>
      </div>
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  background-color: rgb(94, 132, 158);
  position: sticky;
  top: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;

  .HeaderComponent_innerBox {
    display: flex;
    width: 1200px;
    justify-content: center;
  }
`;

const LogoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 60px;
    height: 100%;
    border-radius: 50%;
  }
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .SearchBox_innerBox {
    display: flex;
    background-color: rgb(71, 110, 139);
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 400px;

    .SearchBox_innerBox_input {
      width: 85%;
      margin-left: 10px;
      background-color: transparent;
      border: none;
      color: white;
      outline: none;
    }

    .SearchBox_innerBox_img {
      cursor: pointer;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

const AccountBox = styled.div``;
