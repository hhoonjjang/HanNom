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
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { gsap } from "gsap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";

const { useEffect, useState } = React;

export default function UserCreate(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  const account = useSelector((state) => state.account.account.account);
  // const { web3, login } = useWeb3();
  const [newNickName, setNewNickName] = React.useState("");
  const bgInputRef = React.useRef(null);
  const profileInputRef = React.useRef(null);
  const [bgFile, setBgFile] = React.useState();
  const [bgImg, setBgImg] = React.useState("");
  const [profilefile, setProfileFile] = React.useState();
  const [profileImg, setProfileImg] = React.useState("");
  const [connect, setConnect] = React.useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = React.useState();

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
    dispatch(isLoadingThunk({ isLoading: true }));
    const data = (
      await axios.post("http://localhost:8080/api/user/regist", formData)
    ).data;

    console.log("data : ", data);

    if (data.msg) {
      alert("사용 불가능한 데이터가 있습니다.");
      return;
    }
    await axios.post("http://localhost:8080/api/user/login", {
      account: account,
      count: 0,
    });
    dispatch(isLoadingThunk({ isLoading: false }));
    navigate("/");
    document.querySelector(".NoNamedModal").style.display = "none";
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

  return (
    <NoNamedModal className="NoNamedModal">
      <View
        width="40%"
        height="50%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="relative"
        top="80px"
        padding="0px 0px 0px 0px"
        className="NoNamedModal_innerBox"
        {...getOverrideProps(overrides, "UserCreate")}
        {...rest}
      >
        <Flex
          backgroundImage={
            "url(https://f8n-production-collection-assets.imgix.net/0x16b2B4D1cDAc9a76306CaB8Bf88F0fDd66Af81F7/2/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max)"
          }
          width="600px"
          height="800px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="-4.73%"
          left="0%"
          right="0%"
          borderRadius="40px"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          {...getOverrideProps(overrides, "Dust")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="absolute"
            top="calc(50% - 492px - 0px)"
            left="10.34%"
            right="10.34%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 165")}
          >
            <Flex
              gap="1px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="150px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 163")}
            >
              <Flex
                gap="29px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 162")}
              >
                <Flex
                  gap="26px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 161")}
                >
                  <Flex
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    gap="10px"
                    direction="column"
                    width="300px"
                    height="200px"
                    justifyContent="center"
                    alignItems="center"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    border="1px dashed rgba(35,47,62,1)"
                    borderRadius="15px"
                    padding="71px 119px 71px 119px"
                    backgroundColor="white"
                    opacity="0.7"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    {...getOverrideProps(overrides, "Frame 68")}
                    className="profileFileBackground"
                    onClick={() => {
                      document.querySelector(".profileImgFile").click();
                    }}
                    backgroundImage={`url(${profileImg}) `}
                  >
                    <Flex
                      gap="5px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 16038473044")}
                    >
                      <Icon
                        width="48px"
                        height="42px"
                        viewBox={{ minX: 0, minY: 0, width: 48, height: 42 }}
                        paths={[
                          {
                            d: "M42 4.5C42.825 4.5 43.5 5.175 43.5 6L43.5 35.9812L43.0312 35.3719L30.2812 18.8719C29.8594 18.3188 29.1938 18 28.5 18C27.8062 18 27.15 18.3188 26.7188 18.8719L18.9375 28.9406L16.0781 24.9375C15.6562 24.3469 14.9812 24 14.25 24C13.5188 24 12.8438 24.3469 12.4219 24.9469L4.92188 35.4469L4.5 36.0281L4.5 36L4.5 6C4.5 5.175 5.175 4.5 6 4.5L42 4.5ZM6 0C2.69063 0 0 2.69063 0 6L0 36C0 39.3094 2.69063 42 6 42L42 42C45.3094 42 48 39.3094 48 36L48 6C48 2.69063 45.3094 0 42 0L6 0ZM13.5 18C14.0909 18 14.6761 17.8836 15.2221 17.6575C15.768 17.4313 16.2641 17.0998 16.682 16.682C17.0998 16.2641 17.4313 15.768 17.6575 15.2221C17.8836 14.6761 18 14.0909 18 13.5C18 12.9091 17.8836 12.3239 17.6575 11.7779C17.4313 11.232 17.0998 10.7359 16.682 10.318C16.2641 9.90016 15.768 9.56869 15.2221 9.34254C14.6761 9.1164 14.0909 9 13.5 9C12.9091 9 12.3239 9.1164 11.7779 9.34254C11.232 9.56869 10.7359 9.90016 10.318 10.318C9.90016 10.7359 9.56869 11.232 9.34254 11.7779C9.1164 12.3239 9 12.9091 9 13.5C9 14.0909 9.1164 14.6761 9.34254 15.2221C9.56869 15.768 9.90016 16.2641 10.318 16.682C10.7359 17.0998 11.232 17.4313 11.7779 17.6575C12.3239 17.8836 12.9091 18 13.5 18Z",
                            fill: "rgba(35,47,62,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        {...getOverrideProps(overrides, "Vector38473039")}
                      ></Icon>
                      <Flex
                        gap="7px"
                        direction="column"
                        width="unset"
                        height="46px"
                        justifyContent="center"
                        alignItems="center"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 15938473042")}
                      >
                        <Text
                          fontFamily="Inter"
                          fontSize="15px"
                          fontWeight="500"
                          color="rgba(35,47,62,1)"
                          lineHeight="21px"
                          textAlign="center"
                          display="block"
                          direction="column"
                          justifyContent="unset"
                          width="172px"
                          height="unset"
                          gap="unset"
                          alignItems="unset"
                          shrink="0"
                          position="relative"
                          padding="0px 0px 0px 0px"
                          whiteSpace="pre-wrap"
                          children="내 아이콘 등록"
                          {...getOverrideProps(
                            overrides,
                            "\uB0B4 \uC544\uC774\uCF58 \uB4F1\uB85D"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
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
                  <Flex
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    gap="10px"
                    direction="column"
                    width="300px"
                    height="200px"
                    justifyContent="center"
                    alignItems="center"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    border="1px dashed rgba(35,47,62,1)"
                    borderRadius="15px"
                    padding="71px 119px 71px 119px"
                    backgroundColor="white"
                    opacity="0.7"
                    className="bgFileBackground"
                    onClick={() => {
                      document.querySelector(".bgImgFile").click();
                    }}
                    backgroundImage={`url(${bgImg}) `}
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    {...getOverrideProps(overrides, "Frame 158")}
                  >
                    <Flex
                      gap="5px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 16038473046")}
                    >
                      <Icon
                        width="48px"
                        height="42px"
                        viewBox={{ minX: 0, minY: 0, width: 48, height: 42 }}
                        paths={[
                          {
                            d: "M42 4.5C42.825 4.5 43.5 5.175 43.5 6L43.5 35.9812L43.0312 35.3719L30.2812 18.8719C29.8594 18.3188 29.1938 18 28.5 18C27.8062 18 27.15 18.3188 26.7188 18.8719L18.9375 28.9406L16.0781 24.9375C15.6562 24.3469 14.9812 24 14.25 24C13.5188 24 12.8438 24.3469 12.4219 24.9469L4.92188 35.4469L4.5 36.0281L4.5 36L4.5 6C4.5 5.175 5.175 4.5 6 4.5L42 4.5ZM6 0C2.69063 0 0 2.69063 0 6L0 36C0 39.3094 2.69063 42 6 42L42 42C45.3094 42 48 39.3094 48 36L48 6C48 2.69063 45.3094 0 42 0L6 0ZM13.5 18C14.0909 18 14.6761 17.8836 15.2221 17.6575C15.768 17.4313 16.2641 17.0998 16.682 16.682C17.0998 16.2641 17.4313 15.768 17.6575 15.2221C17.8836 14.6761 18 14.0909 18 13.5C18 12.9091 17.8836 12.3239 17.6575 11.7779C17.4313 11.232 17.0998 10.7359 16.682 10.318C16.2641 9.90016 15.768 9.56869 15.2221 9.34254C14.6761 9.1164 14.0909 9 13.5 9C12.9091 9 12.3239 9.1164 11.7779 9.34254C11.232 9.56869 10.7359 9.90016 10.318 10.318C9.90016 10.7359 9.56869 11.232 9.34254 11.7779C9.1164 12.3239 9 12.9091 9 13.5C9 14.0909 9.1164 14.6761 9.34254 15.2221C9.56869 15.768 9.90016 16.2641 10.318 16.682C10.7359 17.0998 11.232 17.4313 11.7779 17.6575C12.3239 17.8836 12.9091 18 13.5 18Z",
                            fill: "rgba(35,47,62,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        {...getOverrideProps(overrides, "Vector38473047")}
                      ></Icon>
                      <Flex
                        gap="7px"
                        direction="column"
                        width="unset"
                        height="46px"
                        justifyContent="center"
                        alignItems="center"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 15938473048")}
                      >
                        <Text
                          fontFamily="Inter"
                          fontSize="15px"
                          fontWeight="500"
                          color="rgba(35,47,62,1)"
                          lineHeight="21px"
                          textAlign="center"
                          display="block"
                          direction="column"
                          justifyContent="unset"
                          width="172px"
                          height="unset"
                          gap="unset"
                          alignItems="unset"
                          shrink="0"
                          position="relative"
                          padding="0px 0px 0px 0px"
                          whiteSpace="pre-wrap"
                          children="배경화면 등록"
                          {...getOverrideProps(
                            overrides,
                            "\uBC30\uACBD\uD654\uBA74 \uB4F1\uB85D"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
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
                </Flex>
                <Flex
                  gap="29px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 157")}
                >
                  <TextField
                    width="450px"
                    height="33px"
                    alignItems="center"
                    shrink="0"
                    size="small"
                    value={account}
                    disabled
                    readOnly
                    isDisabled={false}
                    labelHidden={false}
                    variation="quiet"
                    {...getOverrideProps(overrides, "TextField38473015")}
                  ></TextField>
                  <TextField
                    width="450px"
                    height="33px"
                    placeholder="닉네임 입력"
                    alignItems="center"
                    shrink="0"
                    size="small"
                    isDisabled={false}
                    labelHidden={false}
                    variation="quiet"
                    onInput={(e) => {
                      inputName(e);
                    }}
                    {...getOverrideProps(overrides, "TextField38473029")}
                  ></TextField>
                </Flex>
              </Flex>
              <Button
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                width="unset"
                height="34px"
                borderRadius="35px"
                shrink="0"
                backgroundColor="rgba(35,47,62,1)"
                size="small"
                isDisabled={false}
                variation="primary"
                children="Create"
                margin="20px"
                onClick={() => {
                  registNickName();
                }}
                {...getOverrideProps(overrides, "Button")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </View>
    </NoNamedModal>
  );
}

const NoNamedModal = styled.div`
  width: 100vmaxx;
  height: 100vmax;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  // bottom: 0%;
  justify-content: center;
  z-index: 999999;

  .NoNamedModal_innerBox {
    display: flex;
    justify-content: center;
  }
`;

const ImgFile = styled.input`
  display: none;
`;
