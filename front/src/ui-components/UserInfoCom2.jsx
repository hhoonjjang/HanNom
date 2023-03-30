/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function UserInfoCom2(props) {
  const { overrides, ...rest } = props;
  const item = Object.values(props)[0];
  // console.log(item);
  return (
    <Link to={`nft/${item.sellerAddress}/${item.tokenId}`}>
      <View
        width="275px"
        height="360px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="relative"
        padding="0px 0px 0px 0px"
        borderRadius="35px"
        overflow="hidden"
        {...getOverrideProps(overrides, "UserInfoCom2")}
        {...rest}
      >
        <div>
          <Image
            src={`http://localhost:8080${item.Nft.nftImg}`}
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
            padding="0px 0px 0px 0px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            objectFit="cover"
            {...getOverrideProps(overrides, "nft (5) 2")}
          ></Image>
          <Flex
            gap="41px"
            direction="column"
            width="234px"
            height="315px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="5.28%"
            bottom="7.22%"
            left="7.27%"
            right="7.64%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 25")}
          >
            <Flex
              gap="70px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 23")}
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
                borderRadius="15px"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 18")}
              >
                <Image
                  src={`http://localhost:8080${item.Nft.User.profileImg}`}
                  width="79px"
                  height="79px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="10px SOLID rgba(255,255,255,0.3)"
                  borderRadius="20px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 2")}
                ></Image>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="25px"
                padding="7px 18px 7px 18px"
                backgroundColor="rgba(217,217,217,0.8)"
                {...getOverrideProps(overrides, "Frame 19")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="10px"
                  fontWeight="700"
                  color="rgba(3,3,3,1)"
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
                  children={item.Nft.nftName}
                  {...getOverrideProps(overrides, "title name")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="14px"
              direction="row"
              width="132px"
              height="35px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,0.1)"
              {...getOverrideProps(overrides, "Frame 10")}
            >
              <Text
                fontFamily="Inter"
                fontSize="25px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="37.5px"
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
                children={item.Nft.nftName}
                {...getOverrideProps(overrides, "Title Name")}
              ></Text>
            </Flex>
            <Flex
              gap="7px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="20px"
              padding="5px 8px 5px 8px"
              backgroundColor="rgba(255,255,253,0.8)"
              {...getOverrideProps(overrides, "Frame 8")}
            >
              <Image
                src={`http://localhost:8080${item.Nft.User.profileImg}`}
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="128px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 1")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="18px"
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
                children={item.Nft.User.userName}
                {...getOverrideProps(overrides, "@Aaaaart")}
              ></Text>
            </Flex>
            <Flex
              gap="143px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,0.8)"
              {...getOverrideProps(overrides, "Frame 24")}
            >
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
                {...getOverrideProps(overrides, "Frame 22")}
              >
                <Flex
                  gap="11px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="10px"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 20")}
                >
                  <Text
                    fontFamily="Inria Serif"
                    fontSize="15px"
                    fontWeight="700"
                    color="rgba(3,5,3,1)"
                    lineHeight="22.5px"
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
                    children={`TokenId :`}
                    {...getOverrideProps(overrides, "Minted")}
                  ></Text>
                  <Text
                    fontFamily="Inria Serif"
                    fontSize="17px"
                    fontWeight="300"
                    color="rgba(3,5,3,1)"
                    fontStyle="italic"
                    lineHeight="25.5px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="42px"
                    height="23px"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={item.tokenId}
                    {...getOverrideProps(overrides, "18/20")}
                  ></Text>
                </Flex>
                <Flex
                  gap="26px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="10px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(175,175,175,0.2)"
                  {...getOverrideProps(overrides, "Frame 21")}
                >
                  <Text
                    fontFamily="Inria Serif"
                    fontSize="15px"
                    fontWeight="700"
                    color="rgba(3,5,3,1)"
                    lineHeight="22.5px"
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
                    children="Price"
                    {...getOverrideProps(overrides, "Price")}
                  ></Text>
                  <Text
                    fontFamily="Inria Serif"
                    fontSize="17px"
                    fontWeight="300"
                    color="rgba(3,5,3,1)"
                    fontStyle="italic"
                    lineHeight="25.5px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="71px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={item.price}
                    {...getOverrideProps(overrides, "0.09ETH")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </View>
    </Link>
  );
}

const cover = styled.div``;
