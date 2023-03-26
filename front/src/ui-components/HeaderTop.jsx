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

export default function HearderTop(props) {
  const { overrides, ...rest } = props;
  const [dropDownHidden, setDropDownHidden] = React.useState(false);
  const [searchData, setSearchData] = React.useState("");
  const navigate = useNavigate();
  const account = useSelector((state) => state.account.account.account);
  const username = useSelector((state) => state.username.username.username);
  const [loginCookie, setLoginCookie] = React.useState("");
  const { web3, login } = useWeb3();
  const [newNickName, setNewNickName] = React.useState("");
  const inputRef = React.useRef(null);
  const bgInputRef = React.useRef(null);
  const profileInputRef = React.useRef(null);
  const searchButtonRef = React.useRef(null);
  const [bgFile, setBgFile] = React.useState();
  const [bgImg, setBgImg] = React.useState("");
  const [profilefile, setProfileFile] = React.useState();
  const [profileImg, setProfileImg] = React.useState("");

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
      if (cookie[i].search("username") != -1) {
        console.log(loginCookie);
        setLoginCookie(cookie[i].search("username"));
        console.log(cookie[i].search("username"));
        return;
      }

      // cookie[i].replace("username=", "");
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
          username == "unknown" ? (
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
                <div className="HeaderTop_nonamedUserModal_innerBox_userBackground">
                  <span>배경화면</span> :
                  <div className="HeaderTop_nonamedUserModal_innerBox_userBackgroundCover">
                    <Flex
                      onMouseEnter={onEnter}
                      onMouseLeave={onLeave}
                      gap="10px"
                      direction="column"
                      width="225px"
                      height="150px"
                      justifyContent="center"
                      alignItems="center"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      border="3px dashed rgba(77,77,77,0.7)"
                      borderRadius="15px"
                      padding="71px 119px 71px 119px"
                      {...getOverrideProps(overrides, "Frame 67")}
                      className="bgFileBackground"
                      onClick={() => {
                        document.querySelector(".bgImgFile").click();
                      }}
                      backgroundImage={`url(${bgImg}) `}
                    >
                      <Icon
                        width="48px"
                        height="42px"
                        viewBox={{ minX: 0, minY: 0, width: 48, height: 42 }}
                        paths={[
                          {
                            d: "M42 4.5C42.825 4.5 43.5 5.175 43.5 6L43.5 35.9812L43.0312 35.3719L30.2812 18.8719C29.8594 18.3188 29.1938 18 28.5 18C27.8062 18 27.15 18.3188 26.7188 18.8719L18.9375 28.9406L16.0781 24.9375C15.6562 24.3469 14.9812 24 14.25 24C13.5188 24 12.8438 24.3469 12.4219 24.9469L4.92188 35.4469L4.5 36.0281L4.5 36L4.5 6C4.5 5.175 5.175 4.5 6 4.5L42 4.5ZM6 0C2.69063 0 0 2.69063 0 6L0 36C0 39.3094 2.69063 42 6 42L42 42C45.3094 42 48 39.3094 48 36L48 6C48 2.69063 45.3094 0 42 0L6 0ZM13.5 18C14.0909 18 14.6761 17.8836 15.2221 17.6575C15.768 17.4313 16.2641 17.0998 16.682 16.682C17.0998 16.2641 17.4313 15.768 17.6575 15.2221C17.8836 14.6761 18 14.0909 18 13.5C18 12.9091 17.8836 12.3239 17.6575 11.7779C17.4313 11.232 17.0998 10.7359 16.682 10.318C16.2641 9.90016 15.768 9.56869 15.2221 9.34254C14.6761 9.1164 14.0909 9 13.5 9C12.9091 9 12.3239 9.1164 11.7779 9.34254C11.232 9.56869 10.7359 9.90016 10.318 10.318C9.90016 10.7359 9.56869 11.232 9.34254 11.7779C9.1164 12.3239 9 12.9091 9 13.5C9 14.0909 9.1164 14.6761 9.34254 15.2221C9.56869 15.768 9.90016 16.2641 10.318 16.682C10.7359 17.0998 11.232 17.4313 11.7779 17.6575C12.3239 17.8836 12.9091 18 13.5 18Z",
                            fill: "rgba(77,77,77,0.7)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        {...getOverrideProps(overrides, "Vector")}
                      ></Icon>
                    </Flex>
                    <ImgFile
                      type="file"
                      accept="image/*"
                      required
                      className="bgImgFile"
                      name="background"
                      ref={bgInputRef}
                      onChange={() => {
                        bgFileChange();
                      }}
                    />
                  </div>
                </div>
                <MarginStyle2 />
                <div className="HeaderTop_nonamedUserModal_innerBox_userProfileImg">
                  <span>내 사진</span> :
                  <div className="HeaderTop_nonamedUserModal_innerBox_userProfileImgCover">
                    <Flex
                      onMouseEnter={onEnter}
                      onMouseLeave={onLeave}
                      gap="10px"
                      direction="column"
                      width="225px"
                      height="150px"
                      justifyContent="center"
                      alignItems="center"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      border="3px dashed rgba(77,77,77,0.7)"
                      borderRadius="15px"
                      padding="71px 119px 71px 119px"
                      {...getOverrideProps(overrides, "Frame 67")}
                      className="profileFileBackground"
                      onClick={() => {
                        document.querySelector(".profileImgFile").click();
                      }}
                      backgroundImage={`url(${profileImg}) `}
                    >
                      <Icon
                        width="48px"
                        height="42px"
                        viewBox={{ minX: 0, minY: 0, width: 48, height: 42 }}
                        paths={[
                          {
                            d: "M42 4.5C42.825 4.5 43.5 5.175 43.5 6L43.5 35.9812L43.0312 35.3719L30.2812 18.8719C29.8594 18.3188 29.1938 18 28.5 18C27.8062 18 27.15 18.3188 26.7188 18.8719L18.9375 28.9406L16.0781 24.9375C15.6562 24.3469 14.9812 24 14.25 24C13.5188 24 12.8438 24.3469 12.4219 24.9469L4.92188 35.4469L4.5 36.0281L4.5 36L4.5 6C4.5 5.175 5.175 4.5 6 4.5L42 4.5ZM6 0C2.69063 0 0 2.69063 0 6L0 36C0 39.3094 2.69063 42 6 42L42 42C45.3094 42 48 39.3094 48 36L48 6C48 2.69063 45.3094 0 42 0L6 0ZM13.5 18C14.0909 18 14.6761 17.8836 15.2221 17.6575C15.768 17.4313 16.2641 17.0998 16.682 16.682C17.0998 16.2641 17.4313 15.768 17.6575 15.2221C17.8836 14.6761 18 14.0909 18 13.5C18 12.9091 17.8836 12.3239 17.6575 11.7779C17.4313 11.232 17.0998 10.7359 16.682 10.318C16.2641 9.90016 15.768 9.56869 15.2221 9.34254C14.6761 9.1164 14.0909 9 13.5 9C12.9091 9 12.3239 9.1164 11.7779 9.34254C11.232 9.56869 10.7359 9.90016 10.318 10.318C9.90016 10.7359 9.56869 11.232 9.34254 11.7779C9.1164 12.3239 9 12.9091 9 13.5C9 14.0909 9.1164 14.6761 9.34254 15.2221C9.56869 15.768 9.90016 16.2641 10.318 16.682C10.7359 17.0998 11.232 17.4313 11.7779 17.6575C12.3239 17.8836 12.9091 18 13.5 18Z",
                            fill: "rgba(77,77,77,0.7)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        {...getOverrideProps(overrides, "Vector")}
                      ></Icon>
                    </Flex>
                    <ImgFile
                      type="file"
                      accept="image/*"
                      required
                      className="profileImgFile"
                      name="profile"
                      ref={profileInputRef}
                      onChange={() => {
                        profileFileChange();
                      }}
                    />
                  </div>
                </div>
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
