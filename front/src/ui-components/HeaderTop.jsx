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
  Flex,
  Divider,
  Icon,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import HLogo from "./HLogo";
import { gsap } from "gsap";
import userIcon from "./images/user-regular.svg";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AfterHeader from "./AfterHeader";
import { useSelector } from "react-redux";
import { useWeb3 } from "../modules/useWeb3";
import axios from "axios";
import UserCreate from "./UserCreate";

export default function HearderTop(props) {
  const { overrides, ...rest } = props;
  const [dropDownHidden, setDropDownHidden] = React.useState(false);
  const [searchData, setSearchData] = React.useState("");
  const navigate = useNavigate();
  const account = useSelector((state) => state.account.account.account);
  const username = useSelector((state) => state.username.username.username);
  const [loginCookie, setLoginCookie] = React.useState("");
  // const { web3, login } = useWeb3();
  const [newNickName, setNewNickName] = React.useState("");
  const inputRef = React.useRef(null);
  const bgInputRef = React.useRef(null);
  const profileInputRef = React.useRef(null);
  const searchButtonRef = React.useRef(null);
  const [bgFile, setBgFile] = React.useState();
  const [bgImg, setBgImg] = React.useState("");
  const [profilefile, setProfileFile] = React.useState();
  const [profileImg, setProfileImg] = React.useState("");
  const [connect, setConnect] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [registBool, setRegistBool] = React.useState(true);
  const [user, setUser] = React.useState();
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

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const onClick = () => {
    if (searchData.match(/\S/g)) {
      navigateToSearch(searchData);
    } else {
      alert("검색어를 입력하십시오.");
    }
  };

  const registNickName = async () => {
    if (!newNickName || !bgFile || !profilefile) {
      alert("빠짐없이 작성해주십시오.");
      return;
    }
    const formData = new FormData();
    formData.append("background", bgFile);
    formData.append("profile", profilefile);
    formData.append("nickName", newNickName);
    formData.append("account", account);

    const data = (
      await axios.post("http://localhost:8080/api/user/regist", formData)
    ).data;

    console.log("data : ", data);

    if (data.msg) {
      alert("사용 불가능한 데이터가 있습니다.");
      return;
    }
    navigate("/");
    // window.location.reload();
  };
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  const bgFileChange = (e) => {
    let selectedIMG = document.querySelector(".bgImgFile");
    if (selectedIMG.files && selectedIMG.files.length > 0) {
      setBgFile(selectedIMG.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(selectedIMG.files[0]);
      reader.onload = () => {
        if (reader.result) {
          setBgImg(reader.result);
          document.querySelector(
            ".bgFileBackground"
          ).style.backgroundRepeat = `no-repeat`;
          document.querySelector(".bgFileBackground").style.backgroundSize =
            "contain";
          document.querySelector(".bgFileBackground").style.backgroundPosition =
            "center";
        }
      };
    }
  };

  const profileFileChange = (e) => {
    let selectedIMG = document.querySelector(".profileImgFile");
    if (selectedIMG.files && selectedIMG.files.length > 0) {
      setProfileFile(selectedIMG.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(selectedIMG.files[0]);
      reader.onload = () => {
        if (reader.result) {
          setProfileImg(reader.result);
          document.querySelector(
            ".profileFileBackground"
          ).style.backgroundRepeat = `no-repeat`;
          document.querySelector(
            ".profileFileBackground"
          ).style.backgroundSize = "contain";
          document.querySelector(
            ".profileFileBackground"
          ).style.backgroundPosition = "center";
        }
      };
    }
  };

  const userCheck = async (account) => {
    let userInfo;
    if (document.cookie) {
      userInfo = await axios.post("http://localhost:8080/api/user/login", {
        cookie: document.cookie,
        count: 1,
      });
      console.log("userInfo%%%%%%%%%%%%%%%%%%%", userInfo);
    } else {
      userInfo = await axios.post("http://localhost:8080/api/user/login", {
        account: account,
        count: 0,
        // cookie: document.cookie,
      });
      console.log("userInfo%%%%%%%%%%%%%%%%%%%", userInfo);
    }
    console.log("count##############@@@@", userInfo.data.count);
    setCount(userInfo.data.count);
    console.log(userInfo.data.msg);
    console.log(userInfo.data.user);
    // if (userInfo.data.user) {
    //   setUser(userInfo.data.user);
    // }

    if (userInfo.data.msg == "회원가입필요" && count != 0) {
      setRegistBool(true);
      console.log("hi");
      // const data = (
      //   await axios.post("http://localhost:8080/api/user/regist", formData)
      // ).data;
    } else {
      setRegistBool(false);
      setUser(userInfo.data.user);
      // console.log(user.profileImg);
      // setImg(`http://localhost:8080${user.profileImg}`);
    }
    console.log(user);
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
    if (document.cookie) {
      console.log("accountRasdasd", props.accountR);
      (async () => {
        console.log(props.accountR);
        const user = await axios.post(
          "http://localhost:8080/api/user/userDisplay",
          {
            account: props.accountR,
          }
        );
        console.log(user);
        setUser(user);
        console.log("user223");
      })();
      // userDisplay();
      setConnect(true);
      userCheck(account);
    } else {
      setConnect(false);
    }
  }, []);
  React.useEffect(() => {
    if (account != undefined) {
      const cookieAccount = document.cookie.split("=")[0];
      console.log(cookieAccount);
      if (account != undefined && account != cookieAccount) {
        deleteCookie(cookieAccount);
        setConnect(false);
      }
      userCheck();
    }
  }, [account]);
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
        {connect ? (
          // 로그인했으면
          document.cookie ? (
            // 로그인했고 기존 유저였으면
            <AfterHeader
              account={account}
              user={user}
              setConnect={setConnect}
            />
          ) : (
            // 로그인했고신규 유저이면
            <UserCreate></UserCreate>
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
              setConnect(true);
              userCheck(account);
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
      top: 37%;
      left: 50%;
      width: 800px;
      height: 900px;
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
      .HeaderTop_nonamedUserModal_innerBox_userBackground{
        display:flex;
      }

      .HeaderTop_nonamedUserModal_innerBox_userProfileImg{
        display:flex;
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

const ImgFile = styled.input`
  display: none;
`;

const MarginStyle2 = styled.div`
  margin-top: 50px;
`;
