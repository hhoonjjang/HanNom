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
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import HLogo from "./HLogo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
export default function AfterHeader(props) {
  const { overrides, ...rest } = props;
  const [view, setView] = React.useState(false);
  const account = useSelector((state) => state.account.account.account);
  const [user, setUser] = React.useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoading = useSelector((state) => state.isLoading.isLoading.isLoading);

  const logoutMethod = () => {
    document.cookie = account + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT";
    props?.setconnect(0);
    navigate("/");
  };
  const logout = () => {
    logoutMethod();
  };

  window.ethereum.on("accountsChanged", (accounts) => {
    logoutMethod();
  });

  React.useEffect(() => {
    setView(false);
  }, [pathname]);
  console.log("랜더링");
  console.log(props.user);

  React.useEffect(() => {
    (async () => {
      if (!account) return;
      const data = (
        await axios.post("/api/user/getUser", {
          from: account,
        })
      ).data;
      console.log("data.profileImg : ", data.profileImg);
      document.querySelector(
        ".afterHeader_userIcon"
      ).src = `${data.profileImg}`;
      setUser(data);
    })();
  }, [account]);

  // React.useEffect(() => {
  //   console.log("애프터헤드의 이즈로딩");
  //   (async () => {
  //     if (!account) return;
  //     const data = (
  //       await axios.post("/api/user/getUser", {
  //         from: account,
  //       })
  //     ).data;
  //     console.log("애프터헤드의 data : ", data);
  //     setUser(data);
  //   })();
  // }, [isLoading]);

  return (
    <View
      width="1440px"
      height="74px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifycontent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AfterHeader")}
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
        justifycontent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></Icon>
      <Link to={"/"}>
        <Flex
          gap="9px"
          direction="row"
          width="222px"
          height="25px"
          justifycontent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="27.03%"
          bottom="39.19%"
          left="13.89%"
          right="70.69%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 37")}
        >
          <HLogo
            display="flex"
            gap="2px"
            direction="row"
            width="74px"
            height="21px"
            justifycontent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "HLogo")}
          ></HLogo>
          <Text
            fontFamily="Inter"
            fontSize="21px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="25.414772033691406px"
            textAlign="center"
            display="block"
            direction="column"
            justifycontent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="HanNom NFT"
            {...getOverrideProps(overrides, "Feed")}
          ></Text>
        </Flex>
      </Link>
      <Flex
        gap="10px"
        direction="row"
        width="229px"
        height="33px"
        justifycontent="flex-start"
        alignItems="center"
        position="absolute"
        top="27.03%"
        bottom="28.38%"
        left="80.35%"
        right="13.89%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 36")}
      >
        <UserIcon
          src={props?.user?.profileImg ? `${props?.user?.profileImg}` : "#"}
          display="block"
          gap="unset"
          alignItems="unset"
          justifycontent="unset"
          shrink="0"
          position="relative"
          className="afterHeader_userIcon"
          onClick={() => {
            setView(!view);
          }}
          {...getOverrideProps(overrides, "Ellipse 3")}
        ></UserIcon>
        <div
          onClick={() => {
            setView(!view);
          }}
        >
          {user?.userName}
        </div>
        {view ? (
          <DropDownButton
            onClick={() => {
              setView(!view);
            }}
          >
            ⌃
          </DropDownButton>
        ) : (
          <DropDownButton
            onClick={() => {
              setView(!view);
            }}
          >
            ⌄
          </DropDownButton>
        )}
        {view && (
          <AfterHeader_dropdown className="afterheader_dropdown">
            <ul>
              <li>
                <div className="afterheader_dropdown_account">{account}</div>
              </li>
              <li>
                <Link to={`/userAddress/${user?.userAddress}`}>Wallet</Link>
              </li>
              {/* <li>
                <hrLine></hrLine>
              </li> */}
              <MarginStyle3 />
              <hr />

              <li>
                <button
                  className="logoutButton"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </AfterHeader_dropdown>
        )}
        <Link to="/mint">
          <Button
            width="unset"
            height="unset"
            borderRadius="35px"
            shrink="0"
            backgroundColor="rgba(12,12,12,1)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Create"
            {...getOverrideProps(overrides, "Button37663159")}
          ></Button>
        </Link>
      </Flex>
    </View>
  );
}

const AfterHeader_dropdown = styled.div`
  border: 1px solid gainsboro;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 150px;
  width: 200px;
  background: white;

  ul {
    list-style: none;
    padding-inline-start: 0px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;

    li {
      font-size: 20px;
      padding-bottom: 7px;

      .afterheader_dropdown_account {
        width: 100%;
        padding-left: 5px;
        padding-right: 5px;
        background: gainsboro;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        border-radius: 15px;
      }

      a {
        color: black;
        text-decoration: none;
      }

      .logoutButton {
        margin-top: 10px;
        border-radius: 30px;
        width: 100%;
        background: black;
        color: white;
      }
    }
  }
`;

const UserIcon = styled.img`
  width: 35px;
  height: 35px;
  border: 2px solid black;
`;

const DropDownButton = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 25px;
  line-height: 20px;
  padding: 0px;
`;

const MarginStyle3 = styled.div`
  margin-top: 25px;
`;
