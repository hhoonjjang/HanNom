/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/
//nftmypage.jsx
/* eslint-disable */
import * as React from "react";

import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  CheckboxField,
  Flex,
  Icon,
  Image,
  StepperField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";
import Activity from "./Activity.jsx";

export default function NftMyPage(props) {
  console.log("props", props.list);
  const [price, setPrice] = React.useState();
  const [count, setCount] = React.useState(1);
  const [_, render] = React.useState();
  const dispatch = useDispatch();

  console.log(props.web3);
  const sellNft = async (tokenId) => {
    const tempAddress = document.cookie.split("=")[0];
    console.log(tempAddress);
    dispatch(isLoadingThunk({ isLoading: true }));
    const result = (
      await axios.post("http://localhost:8080/api/mint/sell", {
        tokenId: tokenId,
        price: price,
        account: tempAddress,
      })
    ).data;
    console.log(result);
    setCount(count + 1);
    await props.web3.eth.sendTransaction(result.approveObj);
    await props.web3.eth.sendTransaction(result.obj);
    sellComplete(tokenId);
    dispatch(isLoadingThunk({ isLoading: false }));
  };

  const sellComplete = async (tokenId) => {
    const tempAddress = document.cookie.split("=")[0];
    const data = await axios.post(
      "http://localhost:8080/api/mint/sellComplete",
      {
        tokenId: tokenId,
        price: price,
        account: tempAddress,
      }
    );
    console.log(data);
    props.setStateMethod();
  };

  const mintCancel = async (tokenId) => {
    const tempAddress = document.cookie.split("=")[0];
    dispatch(isLoadingThunk({ isLoading: true }));
    const result = await axios.post(
      "http://localhost:8080/api/mint/saleCancel",
      {
        tokenId: tokenId,
        account: tempAddress,
      }
    );
    console.log(result.data);
    await props.web3.eth.sendTransaction(result.data);
    cancelComplete(tokenId);
    dispatch(isLoadingThunk({ isLoading: false }));
  };
  const { overrides, ...rest } = props;

  const cancelComplete = async (tokenId) => {
    const data = await axios.post(
      "http://localhost:8080/api/mint/cancelComplete",
      {
        tokenId: tokenId,
      }
    );
    console.log(data);
  };

  return (
    <View
      width="1440px"
      height="975px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NftMyPage")}
      {...rest}
    >
      <Image
        src={
          props?.userdata?.backgroundImg
            ? `http://localhost:8080${props.userdata.backgroundImg}`
            : "#"
        }
        width="100%"
        height="41.03%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        // position="absolute"
        top="0%"
        bottom="58.97%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "nft (1) 338403087")}
      ></Image>
      <Flex
        gap="22px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="6.46%"
        bottom="65.54%"
        left="13.89%"
        right="75.28%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 121")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="100px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "Frame 100")}
        >
          <Image
            src={
              props?.userdata?.profileImg
                ? `http://localhost:8080${props.userdata.profileImg}`
                : "#"
            }
            width="100px"
            height="100px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="10px SOLID rgba(255,255,255,0.3)"
            borderRadius="29px"
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
          borderRadius="10px"
          padding="2px 14px 2px 14px"
          backgroundImage="linear-gradient(-90deg, rgba(152,151,151,0.46), rgba(104,112,120,1), rgba(9,8,8,0.3021), rgba(0,136,153,1))"
          {...getOverrideProps(overrides, "Frame 27")}
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
            children="ZIR"
            {...getOverrideProps(overrides, "ZIR")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="35px"
          fontWeight="800"
          color="rgba(255,255,255,1)"
          lineHeight="52.5px"
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
          children={
            props?.userdata?.userName ? `${props.userdata.userName}` : ""
          }
          {...getOverrideProps(overrides, "Sanha38")}
        ></Text>
        <Flex
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
          opacity="0.699999988079071"
          {...getOverrideProps(overrides, "Frame 30")}
        >
          <Image
            src={
              props?.userdata?.profileImg
                ? `http://localhost:8080${props.userdata.profileImg}`
                : "#"
            }
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
            {...getOverrideProps(overrides, "ghrgclzzd 338403095")}
          ></Image>
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
            children={
              props?.userdata?.userName ? `${props.userdata.userName}` : ""
            }
            {...getOverrideProps(overrides, "sanha38")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="640px"
        direction="row"
        width="1040px"
        height="57px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="38.05%"
        bottom="56.1%"
        left="13.89%"
        right="13.89%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 122")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="15px"
          padding="15px 21px 15px 21px"
          backgroundColor="rgba(252,252,252,1)"
          {...getOverrideProps(overrides, "Frame 106")}
        >
          <Flex
            gap="36px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 10538403099")}
          >
            <Flex
              gap="1px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10138403100")}
            >
              <Text
                fontFamily="Inter"
                fontSize="7px"
                fontWeight="700"
                color="rgba(86,86,86,1)"
                lineHeight="10.5px"
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
                children="Collection of"
                {...getOverrideProps(overrides, "Collection of")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="10px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="4"
                {...getOverrideProps(overrides, "4")}
              ></Text>
            </Flex>
            <Flex
              gap="1px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 102")}
            >
              <Text
                fontFamily="Inter"
                fontSize="7px"
                fontWeight="700"
                color="rgba(86,86,86,1)"
                lineHeight="10.5px"
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
                children="Owned by"
                {...getOverrideProps(overrides, "Owned by")}
              ></Text>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 10338403105")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="10px"
                  fontWeight="700"
                  color="rgba(0,0,0,1)"
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
                  children="3"
                  {...getOverrideProps(overrides, "3")}
                ></Text>
                <Flex
                  gap="1px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 10438403107")}
                >
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/133/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 6")}
                  ></Image>
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/133/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 7")}
                  ></Image>
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/133/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 8")}
                  ></Image>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="1px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10338403111")}
            >
              <Text
                fontFamily="Inter"
                fontSize="7px"
                fontWeight="700"
                color="rgba(86,86,86,1)"
                lineHeight="10.5px"
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
                children="Floor Price"
                {...getOverrideProps(overrides, "Floor Price")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="10px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="1.30 ETH"
                {...getOverrideProps(overrides, "1.30 ETH38403113")}
              ></Text>
            </Flex>
            <Flex
              gap="1px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10438403114")}
            >
              <Text
                fontFamily="Inter"
                fontSize="7px"
                fontWeight="700"
                color="rgba(86,86,86,1)"
                lineHeight="10.5px"
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
                children="Total Sales"
                {...getOverrideProps(overrides, "Total Sales")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="10px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="1.30 ETH"
                {...getOverrideProps(overrides, "1.30 ETH38403116")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="23px"
          height="23px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <Icon
            width="23px"
            height="23px"
            viewBox={{ minX: 0, minY: 0, width: 23, height: 23 }}
            paths={[
              {
                d: "M23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5Z",
                fill: "rgba(250,250,250,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            // position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Ellipse 7")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="15px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="9px"
            height="15px"
            gap="unset"
            alignItems="unset"
            // position="absolute"
            top="2px"
            left="7px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="..."
            {...getOverrideProps(overrides, "...")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        // position="absolute"
        top="46.77%"
        bottom="50.46%"
        left="20.97%"
        right="73.75%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 123")}
      ></Flex>
      <TextBox>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1040px"
          height="unset"
          gap="unset"
          alignItems="unset"
          // position="absolute"
          top="455px"
          left="202px"
          margin="50px 0px 30px 0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My Page"
          {...getOverrideProps(overrides, "My Page")}
        ></Text>
      </TextBox>
      <HrBox>
        <View
          width="1040px"
          height="1.5px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          // position="absolute"
          top="50.72%"
          bottom="49.13%"
          left="13.89%"
          right="13.89%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(161,161,161,1)"
          {...getOverrideProps(overrides, "Rectangle 16")}
        ></View>
      </HrBox>
      {props?.list?.length == 0 ? (
        <NoNft>
          <div>
            <h3>보유한 NFT가 없습니다.</h3>
          </div>
        </NoNft>
      ) : (
        <Flex
          gap="33px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          // position="absolute"
          top="509px"
          left="200px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 156")}
        >
          <ListCover>
            {props.list ? (
              props.list.map((item, index) => {
                return (
                  <>
                    <Flex
                      key={(`index:`, index)}
                      gap="16px"
                      direction="column"
                      width="325px"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 154")}
                    >
                      <CheckboxField
                        width="unset"
                        height="unset"
                        shrink="0"
                        size="small"
                        defaultChecked={true}
                        isDisabled={false}
                        labelPosition="start"
                        {...getOverrideProps(
                          overrides,
                          "CheckboxField38403565"
                        )}
                      ></CheckboxField>
                      <Flex
                        gap="0"
                        direction="column"
                        width="325px"
                        height="387px"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 11838403566")}
                      >
                        <Image
                          src={`http://localhost:8080${item.nftImg}`}
                          width="325px"
                          height="300px"
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          shrink="0"
                          position="relative"
                          borderRadius="15px 15px 0px 0px"
                          padding="0px 0px 0px 0px"
                          objectFit="cover"
                          {...getOverrideProps(overrides, "nft (1) 338403567")}
                        ></Image>
                        <Flex
                          gap="10px"
                          direction="column"
                          width="325px"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          overflow="hidden"
                          shrink="0"
                          position="relative"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          borderRadius="0px 0px 15px 15px"
                          padding="13px 6px 13px 6px"
                          backgroundColor="rgba(252,252,252,1)"
                          {...getOverrideProps(overrides, "Frame 11638403568")}
                        >
                          <Flex
                            gap="13px"
                            direction="column"
                            width="94px"
                            height="61px"
                            justifyContent="center"
                            alignItems="flex-start"
                            shrink="0"
                            position="relative"
                            padding="0px 0px 0px 6px"
                            {...getOverrideProps(
                              overrides,
                              "Frame 11538403569"
                            )}
                          >
                            <Flex
                              gap="6px"
                              direction="row"
                              width="81px"
                              height="21px"
                              justifyContent="flex-start"
                              alignItems="center"
                              shrink="0"
                              position="relative"
                              borderRadius="25px"
                              padding="6px 9px 6px 9px"
                              backgroundColor="rgba(217,217,217,0.5)"
                              {...getOverrideProps(
                                overrides,
                                "Frame 10138403570"
                              )}
                            >
                              <Image
                                src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/113/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                                width="15px"
                                height="15px"
                                display="block"
                                gap="unset"
                                alignItems="unset"
                                justifyContent="unset"
                                shrink="0"
                                position="relative"
                                borderRadius="23px"
                                padding="0px 0px 0px 0px"
                                objectFit="cover"
                                {...getOverrideProps(
                                  overrides,
                                  "ghrgclzzd 338403571"
                                )}
                              ></Image>
                              <Text
                                fontFamily="Inter"
                                fontSize="8px"
                                fontWeight="700"
                                color="rgba(0,0,0,0.8)"
                                lineHeight="12px"
                                textAlign="center"
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
                                children={props.userName}
                                {...getOverrideProps(
                                  overrides,
                                  "@sanha3838403572"
                                )}
                              ></Text>
                            </Flex>
                            <Flex
                              gap="1px"
                              direction="column"
                              width="61px"
                              height="unset"
                              justifyContent="center"
                              alignItems="flex-start"
                              shrink="0"
                              position="relative"
                              padding="0px 0px 0px 3px"
                              {...getOverrideProps(
                                overrides,
                                "Frame 10538403573"
                              )}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="7px"
                                fontWeight="700"
                                color="rgba(86,86,86,1)"
                                lineHeight="10.5px"
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
                                children={item.nftDescription}
                                {...getOverrideProps(
                                  overrides,
                                  "Reserve38403574"
                                )}
                              ></Text>
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                color="rgba(0,0,0,1)"
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
                                children={item.nftName}
                                {...getOverrideProps(
                                  overrides,
                                  "1.30 ETH38403575"
                                )}
                              ></Text>
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                color="rgba(0,0,0,1)"
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
                                children={"tokenid: " + item.tokenId}
                                {...getOverrideProps(
                                  overrides,
                                  "1.30 ETH38403575"
                                )}
                              ></Text>
                              <Text
                                fontFamily="Inter"
                                fontSize="10px"
                                fontWeight="700"
                                color="rgba(0,0,0,1)"
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
                                children={item.state}
                                {...getOverrideProps(
                                  overrides,
                                  "1.30 ETH38403575"
                                )}
                              ></Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex
                        gap="9px"
                        direction="row"
                        width="306px"
                        justifyContent="flex-start"
                        alignItems="flex-end"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 15238403576")}
                      >
                        {/* <StepperField
                    width="25px"
                    height="unset"
                    shrink="0"
                    size="small"
                    isDisabled={false}
                    labelHidden={true}
                    variation="quiet"
                    {...getOverrideProps(overrides, "StepperField38403577")}
                  ></StepperField> */}
                        {item.state == "mint" ? (
                          <>
                            <TextField
                              width="150px"
                              placeholder="판매할 ETH 입력"
                              alignItems="center"
                              shrink="0"
                              size="small"
                              isDisabled={false}
                              labelHidden={false}
                              variation="quiet"
                              onChange={(e) => {
                                setPrice(e.target.value);
                                console.log(price);
                              }}
                              {...getOverrideProps(
                                overrides,
                                "TextField38403578"
                              )}
                            ></TextField>
                            <Button
                              width="unset"
                              height="unset"
                              shrink="0"
                              size="small"
                              children="Sell"
                              isDisabled={false}
                              variation="primary"
                              borderRadius="35px"
                              {...getOverrideProps(overrides, "Badge38403247")}
                              onClick={() => {
                                sellNft(item.tokenId);
                                console.log("hi");
                                render();
                              }}
                            ></Button>
                          </>
                        ) : (
                          <>
                            <Button
                              width="unset"
                              height="unset"
                              shrink="0"
                              size="small"
                              children="Cancel"
                              isDisabled={false}
                              variation="primary"
                              backgroundColor="red"
                              borderRadius="35px"
                              {...getOverrideProps(overrides, "Badge38403247")}
                              onClick={() => {
                                mintCancel(item.tokenId);
                                render();
                              }}
                            ></Button>
                            <SellingText>이 NFT를 판매 중입니다</SellingText>
                          </>
                        )}
                      </Flex>
                    </Flex>
                    {index % 3 == 2 ? <LineBreakBox></LineBreakBox> : <></>}
                    {index == props.list.length - 1 && index % 3 != 2 ? (
                      <>
                        <TempBox />
                        <TempBox />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })
            ) : (
              <></>
            )}
          </ListCover>
        </Flex>
      )}

      <ActivityBox>
        <Activity />
      </ActivityBox>
    </View>
  );
}
const NoNft = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;

  div {
    padding-top: 70px;
    padding-bottom: 70px;
    width: 1040px;
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
`;

const ListCover = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  & > div {
    margin-right: 30px;
    margin-bottom: 50px;
  }
`;

const LineBreakBox = styled.div`
  height: 10px;
  flex-basis: 100%;
`;

const SellingText = styled.div`
  padding-top: 5px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-left: 15px;
  border-radius: 20px;
  margin-left: 15px;
  color: white;
  width: 100%;
  background: #0122fb;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
`;

const HrBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TempBox = styled.div`
  width: 325px;
`;

const ActivityBox = styled.div`
  display: flex;
  justify-content: center;
`;
