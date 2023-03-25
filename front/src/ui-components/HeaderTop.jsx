/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Icon,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import HLogo from "./HLogo";
import userIcon from "./images/user-regular.svg";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AfterHeader from "./AfterHeader";
import { useSelector } from "react-redux";
import { useWeb3 } from "../modules/useWeb3";
import axios from "axios";

export default function HearderTop(props) {
  const { overrides, ...rest } = props;
  const [dropDownHidden, setDropDownHidden] = React.useState(false);
  const [searchData, setSearchData] = React.useState("");
  const navigate = useNavigate();
  const account = useSelector((state) => state.account.account.account);
  const username = useSelector((state) => state.username.username.username);
  const { web3, login } = useWeb3();
  const [newNickName, setNewNickName] = React.useState("");
  const inputRef = React.useRef(null);
  const searchButtonRef = React.useRef(null);

  const navigateToSearch = () => {
    navigate(`/search?searchData=${searchData}`);
  };
  const dropDownOn = () => {
    setDropDownHidden(true);
  };
  const dropDownOff = () => {
    setDropDownHidden(false);
  };
  const inputName = (e) => {
    setNewNickName(e.currentTarget.value);
  };
  const onClick = () => {
    if (searchData.match(/\S/g)) {
      navigateToSearch(searchData);
    } else {
      alert("검색어를 입력하십시오.");
    }
  };
  const registNickName = async () => {
    if (!newNickName) return;
    const data = (
      await axios.post("http://localhost:8080/api/user/regist", {
        nickname: newNickName,
        account: account,
      })
    ).data;
    if (!data.bool) {
      alert("사용 불가능한 닉네임입니다.");
      return;
    }
    navigate("/");
  };
  React.useEffect(() => {
    const searchButtonRefCurrent = searchButtonRef.current;
    if (searchButtonRef && searchButtonRefCurrent) {
      searchButtonRefCurrent.addEventListener("click", onClick, false);
      return () => {
        searchButtonRefCurrent.removeEventListener("click", onClick, false);
      };
    }
  }, [onClick]);

  React.useEffect(() => {
    const cookie = document.cookie.split(";");
    for (let i in cookie) {
      if (cookie[i].search("username") != -1)
        cookie[i].replace("username=", "");
    }
  }, []);
  return (
    <>
      <View
        width="1440px"
        height="74px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HearderTop")}
        {...rest}
      >
        <Icon
          width="1440px"
          height="74px"
          viewBox={{ minX: 0, minY: 0, width: 1440, height: 74 }}
          paths={[
            {
              d: "M0 0L1440 0L1440 74L0 74L0 0Z",
              fill: "rgba(255,255,253,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></Icon>
        <Link to={"/"}>
          <Text
            fontFamily="Inter"
            fontSize="21px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="25.414772033691406px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="27.03%"
            bottom="39.19%"
            left="19.65%"
            right="76.81%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Feed"
            {...getOverrideProps(overrides, "Feed")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="21px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="25.414772033691406px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="27.03%"
            bottom="39.19%"
            left="23.82%"
            right="70.69%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Explore"
            {...getOverrideProps(overrides, "Explore")}
          ></Text>
          <HLogo
            display="flex"
            gap="2px"
            direction="row"
            width="unset"
            height="21px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="27.03%"
            bottom="44.59%"
            left="13.89%"
            right="80.97%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "HLogo")}
          ></HLogo>
        </Link>
        {account && web3 ? (
          // 로그인했으면
          username != "unknown" ? (
            // 로그인했고 기존 유저였으면
            <AfterHeader account={account} />
          ) : (
            // 로그인했고신규 유저이면
            <HeaderTop_nonamedUserModal>
              <div className="HeaderTop_nonamedUserModal_innerBox">
                <h1>닉네임</h1>
                <div className="HeaderTop_nonamedUserModal_innerBox_account">
                  <span>지갑 주소</span> :
                  <div className="HeaderTop_nonamedUserModal_innerBox_accountCover">
                    <input type="text" value={account} disabled readOnly />
                  </div>
                </div>
                <MarginStyle2 />
                <div className="HeaderTop_nonamedUserModal_innerBox_nickname">
                  <span>닉네임</span> :
                  <div className="HeaderTop_nonamedUserModal_innerBox_nicknameCover">
                    <input
                      type="text"
                      onInput={(e) => {
                        inputName(e);
                      }}
                    />
                  </div>
                </div>
                <MarginStyle2 />
                <MarginStyle2 />
                <MarginStyle2 />
                <MarginStyle2 />
                <MarginStyle2 />
                <hr className="HeaderTop_hr" />
                <MarginStyle2 />
                <div className="HeaderTop_nonamedUserModal_footer">
                  <div className="HeaderTop_nonamedUserModal_footer_btn">
                    <button
                      onClick={() => {
                        registNickName();
                      }}
                    >
                      확인
                    </button>
                  </div>
                </div>
              </div>
            </HeaderTop_nonamedUserModal>
          )
        ) : (
          // 로그인 안했을 때
          <Button
            width="100px"
            // height=""
            position="absolute"
            borderRadius="35px"
            top="27.03%"
            bottom="28.38%"
            left="80.35%"
            right="13.89%"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Connect"
            {...getOverrideProps(overrides, "Button")}
            onClick={() => {
              login();
            }}
          ></Button>
        )}

        <SearchField
          width="400px"
          height="26px"
          placeholder="검색어를 입력하십시오."
          position="absolute"
          top="28.38%"
          bottom="36.49%"
          left="40.97%"
          right="31.25%"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          ref={inputRef}
          searchButtonRef={searchButtonRef}
          {...getOverrideProps(overrides, "SearchField")}
          onInput={(e) => {
            setSearchData(e.target.value);
          }}
          onKeyUp={() => {
            if (window.event.keyCode == 13) {
              if (searchData.match(/\S/g)) {
                navigateToSearch(searchData);
              } else {
                alert("검색어를 입력하십시오.");
              }
            }
          }}
        ></SearchField>
      </View>
    </>
  );
}

const HeaderTop_loggedIn = styled.div`
  width: 100px;
  height: 100px;
  position:absolute;
  top="27.03%"
  bottom="28.38%"
  left="80.35%"
  right="13.89%"

  background-color: black;

  .HeaderTop_loggedIn_button {
    background-color: black;
  }
  .HeaderTop_loggedIn_dropDown {
    list-style: none;
  }
  .HeaderTop_loggedIn_dropDown{
    &.on{
      opacity:1;
    }
    &.off{
      opacity:0;
    }
  }
`;

const HeaderTop_nonamedUserModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  // display: none;
  background-color: rgba(0, 0, 0, 0.4);
  border:radius:10px;
  z-index: 1;

  .HeaderTop_nonamedUserModal_innerBox {
    z-index:2;
      position: absolute;
      top: 25%;
      left: 50%;
      width: 800px;
      height: 600px;
      padding-left:20px;
      padding-right:20px;
      text-align: center;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
      transform: translateX(-50%) translateY(-50%);
      display: flex;
      flex-direction: column;

      span{
        width: 100px;
        letter-spacing:2px;
      }

      .HeaderTop_nonamedUserModal_innerBox_account{
        display:flex;

        .HeaderTop_nonamedUserModal_innerBox_accountCover{
          border: 1px solid gainsboro;
          border-radius : 5px;
          padding: 5px;
          background: gainsboro;
          margin-left:5px;
          
          input{
            border:none;
            width: 250px;
            background:transparent;
          }
        }
      }
      .HeaderTop_nonamedUserModal_innerBox_nickname{
        display:flex;

        .HeaderTop_nonamedUserModal_innerBox_nicknameCover{
          border: 1px solid gainsboro;
          border-radius : 5px;
          padding: 5px;
          background: gainsboro;
          margin-left:5px;
          
          input{
            border:none;
            width: 250px;
            background:transparent;
          }
        }
      }
      .HeaderTop_hr{
        border: 1px solid gainsboro;
        width:95%;
      }
      .HeaderTop_nonamedUserModal_footer{
        display:flex;
        justify-content: end;

        .HeaderTop_nonamedUserModal_footer{
          button{
            border:none;
            border-radius : 5px;
            background: #00E676;
          }
        }
      }
  }


`;
const MarginStyle2 = styled.div`
  margin-top: 50px;
`;
