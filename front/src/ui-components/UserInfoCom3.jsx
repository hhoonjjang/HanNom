/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import UserInfoCompo3 from "./UserInfoCompo3";
import { gsap } from "gsap";
import { timeStamp } from "../api/time.js";
const { useEffect, useState } = React;

export default function UserInfoCom3(props) {
  const [tokenList, setTokenList] = useState();
  console.log("대망의 마무리", props);
  console.log("보노보노짱", props.addresstoken.length);
  console.log("보노보노짱123123", props.address);

  useEffect(() => {
    setTokenList(props);
  }, []);
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.03 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const { overrides, ...rest } = props;
  // console.log("tokenList", tokenList.addresstoken);

  return (
    <>
      {tokenList ? (
        <>
          <View
            width="1040px"
            height="380px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "UserInfoCom3")}
            {...rest}
          >
            <Image
              src={`${tokenList.address.backgroundImg}`}
              width="100%"
              height="100%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="35px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "Rectangle 8")}
            ></Image>
            <Flex
              gap="23px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="6.58%"
              bottom="6.58%"
              left="2.98%"
              right="83.56%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 31")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 30")}
              >
                <Image
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  src={`${tokenList.address.profileImg}`}
                  width="140px"
                  height="140px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="10px SOLID rgba(255,255,255,0.3)"
                  borderRadius="165px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 2")}
                ></Image>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 29")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="10px"
                  padding="2px 14px 2px 14px"
                  backgroundImage="linear-gradient(-90deg, rgba(152,151,151,0.46), rgba(104,112,120,1), rgba(9,8,8,0.3021), rgba(0,136,153,1))"
                  {...getOverrideProps(overrides, "Frame 26")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="10px"
                    fontWeight="700"
                    color="rgba(255,255,255,0.8)"
                    lineHeight="15px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={tokenList.address.userName}
                    {...getOverrideProps(overrides, "UserName37622763")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 28")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="21px"
                  fontWeight="700"
                  color="rgba(255,255,255,0.89)"
                  lineHeight="31.5px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={timeStamp(tokenList.address.createdAt)}
                  {...getOverrideProps(overrides, "UserName37622769")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="10px"
                  fontWeight="700"
                  color="rgba(255,255,255,0.89)"
                  lineHeight="15px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  // children={
                  //   props.addressToken
                  //     ? "Latest : " + props.addressToken.length + " NFTs"
                  //     : "Latest 0 NFTs"
                  // }
                  children={"Latest : " + " NFTs"}
                  {...getOverrideProps(overrides, "3 NFTs")}
                ></Text>
              </Flex>
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                gap="6px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="25px"
                padding="6px 9px 6px 9px"
                backgroundColor="rgba(217,217,217,0.8)"
                {...getOverrideProps(overrides, "Frame 27")}
              >
                <Image
                  src={`${tokenList.address.profileImg}`}
                  width="23px"
                  height="23px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="23px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 3")}
                ></Image>
                <Text
                  fontFamily="Inter"
                  fontSize="10px"
                  fontWeight="700"
                  color="rgba(3,3,3,0.8)"
                  lineHeight="15px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`@${
                    tokenList.address.userAddress.slice(0, 8) + "..."
                  }`}
                  {...getOverrideProps(overrides, "@UserName")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="76px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              position="absolute"
              top="6.58%"
              bottom="6.32%"
              left="22.6%"
              right="5.96%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 34")}
            >
              {/* {props ? (
                props?.addressToken?.map((item, index) => {
                  console.log("item123", item);
                  return (
                    <UserInfoCompo3
                      width="197px"
                      height="331px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      shrink="0"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      padding="0px 0px 0px 0px"
                      tokenList={item}
                      address={props.address}
                      {...getOverrideProps(overrides, "UserInfoCompo3")}
                    ></UserInfoCompo3>
                  );
                })
              ) : (
                <>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                  <div>asd</div>
                </>
              )} */}

              {tokenList?.addresstoken?.map((item, index) => {
                console.log("item123", item);
                return (
                  <UserInfoCompo3
                    key={`index: ${index}`}
                    width="197px"
                    height="331px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    padding="0px 0px 0px 0px"
                    tokenlist={item}
                    address={tokenList.address}
                    {...getOverrideProps(overrides, "UserInfoCompo3")}
                  ></UserInfoCompo3>
                );
              })}
              <UserInfoCompo3
                width="197px"
                height="331px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                padding="0px 0px 0px 0px"
                tokenList={"123"}
                address={123123123}
                {...getOverrideProps(overrides, "UserInfoCompo3")}
              ></UserInfoCompo3>
            </Flex>
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
