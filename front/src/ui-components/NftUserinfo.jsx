/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import { gsap } from "gsap";
import styled from "styled-components";
const { useEffect, useState } = React;

export default function NftUserinfo(props) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.96 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="975px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifycontent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NftUserinfo")}
      {...rest}
    >
      <Image
        src="https://f8n-production-collection-assets.imgix.net/0x5A7b58FF44deeA0c28d55075d25c5D595E83a8E3/2/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
        width="100%"
        height="41.03%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="absolute"
        top="0%"
        bottom="58.97%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "nft (1) 2")}
      ></Image>
      <Flex
        gap="22px"
        direction="column"
        width="unset"
        height="unset"
        justifycontent="center"
        alignItems="flex-start"
        position="absolute"
        top="6.46%"
        bottom="65.54%"
        left="13.89%"
        right="75.28%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 99")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="100px"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "Frame 100")}
        >
          <Image
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            src="https://f8n-production.imgix.net/collections/5vucxvz07.png?auto=format%2Ccompress&q=50&w=128&h=128&fit=crop&dpr=2"
            width="100px"
            height="100px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifycontent="unset"
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
          justifycontent="flex-start"
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
            justifycontent="unset"
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
          justifycontent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sanha38"
          {...getOverrideProps(overrides, "Sanha38")}
        ></Text>
        <Flex
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifycontent="flex-start"
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
            src="https://f8n-production.imgix.net/collections/5vucxvz07.png?auto=format%2Ccompress&q=50&w=128&h=128&fit=crop&dpr=2"
            width="23px"
            height="23px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifycontent="unset"
            shrink="0"
            position="relative"
            borderRadius="23px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "ghrgclzzd 337962824")}
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
            justifycontent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="sanha38"
            {...getOverrideProps(overrides, "sanha38")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="640px"
        direction="row"
        width="1040px"
        height="57px"
        justifycontent="flex-start"
        alignItems="center"
        position="absolute"
        top="38.05%"
        bottom="56.1%"
        left="calc(50% - 520px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 107")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
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
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 10537962861")}
          >
            <Flex
              gap="1px"
              direction="column"
              width="unset"
              height="unset"
              justifycontent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10137962831")}
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
                justifycontent="unset"
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
                justifycontent="unset"
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
              justifycontent="center"
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
                justifycontent="unset"
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
                justifycontent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 10337962839")}
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
                  justifycontent="unset"
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
                  justifycontent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 10437962845")}
                >
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/113/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifycontent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 6")}
                  ></Image>
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/128/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifycontent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 7")}
                  ></Image>
                  <Image
                    src="https://f8n-production.imgix.net/collections/5vucxvz07.png?auto=format%2Ccompress&q=50&w=128&h=128&fit=crop&dpr=2"
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifycontent="unset"
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
              justifycontent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10337962854")}
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
                justifycontent="unset"
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
                justifycontent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="1.30 ETH"
                {...getOverrideProps(overrides, "1.30 ETH37962856")}
              ></Text>
            </Flex>
            <Flex
              gap="1px"
              direction="column"
              width="unset"
              height="unset"
              justifycontent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10437962857")}
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
                justifycontent="unset"
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
                justifycontent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="1.30 ETH"
                {...getOverrideProps(overrides, "1.30 ETH37962859")}
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
          justifycontent="unset"
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
            justifycontent="unset"
            position="absolute"
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
            justifycontent="unset"
            width="9px"
            height="15px"
            gap="unset"
            alignItems="unset"
            position="absolute"
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
        justifycontent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="46.77%"
        bottom="50.46%"
        left="13.89%"
        right="66.67%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 108")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
          lineHeight="27px"
          textAlign="left"
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
          children="NFTs"
          {...getOverrideProps(overrides, "NFTs")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
          lineHeight="27px"
          textAlign="left"
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
          children="Description"
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
          lineHeight="27px"
          textAlign="left"
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
          children="Activity"
          {...getOverrideProps(overrides, "Activity")}
        ></Text>
      </Flex>
      <Flex
        gap="520px"
        direction="row"
        width="unset"
        height="unset"
        justifycontent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="52.41%"
        bottom="45.44%"
        left="13.89%"
        right="13.89%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 114")}
      >
        <Flex
          gap="25px"
          direction="row"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 113")}
        >
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="4px"
            direction="row"
            width="110px"
            height="21px"
            justifycontent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(234,0,50,0.55)"
            {...getOverrideProps(overrides, "Frame 109")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
              textAlign="left"
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
              children="Live Action"
              {...getOverrideProps(overrides, "Live Action")}
            ></Text>
            <Flex
              gap="10px"
              direction="column"
              width="15px"
              height="15px"
              justifycontent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="30px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(244,244,244,1)"
              {...getOverrideProps(overrides, "Frame 537972822")}
            >
              <Text
                fontFamily="Inter"
                fontSize="9px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="13.5px"
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
                children="0"
                {...getOverrideProps(overrides, "037972817")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="4px"
            direction="row"
            width="95px"
            height="21px"
            justifycontent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,226,0,0.55)"
            {...getOverrideProps(overrides, "Frame 110")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
              textAlign="left"
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
              children="Buy Now"
              {...getOverrideProps(overrides, "Buy Now")}
            ></Text>
            <Flex
              gap="10px"
              direction="column"
              width="15px"
              height="15px"
              justifycontent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="30px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(244,244,244,1)"
              {...getOverrideProps(overrides, "Frame 537972827")}
            >
              <Text
                fontFamily="Inter"
                fontSize="9px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="13.5px"
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
                children="0"
                {...getOverrideProps(overrides, "037972828")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="4px"
            direction="row"
            width="125px"
            height="21px"
            justifycontent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,136,153,0.55)"
            {...getOverrideProps(overrides, "Frame 111")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
              textAlign="left"
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
              children="Reserve Price"
              {...getOverrideProps(overrides, "Reserve Price")}
            ></Text>
            <Flex
              gap="10px"
              direction="column"
              width="15px"
              height="15px"
              justifycontent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="30px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(244,244,244,1)"
              {...getOverrideProps(overrides, "Frame 537972831")}
            >
              <Text
                fontFamily="Inter"
                fontSize="9px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="13.5px"
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
                children="0"
                {...getOverrideProps(overrides, "037972832")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="23px"
          direction="row"
          width="140px"
          height="21px"
          justifycontent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(245,245,245,0.55)"
          {...getOverrideProps(overrides, "Frame 112")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
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
            children="Most Active"
            {...getOverrideProps(overrides, "Most Active")}
          ></Text>
          <Flex
            gap="10px"
            direction="column"
            width="15px"
            height="15px"
            justifycontent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="30px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(244,244,244,1)"
            {...getOverrideProps(overrides, "Frame 537972835")}
          >
            <View
              width="8px"
              height="8px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "down 2")}
            >
              <Icon
                width="8px"
                height="3px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.0032958984375,
                  height: 3.001220703125,
                }}
                paths={[
                  {
                    d: "M4.56694 2.85469C4.25444 3.05 3.74694 3.05 3.43444 2.85469L0.234444 0.854688C0.00444446 0.710938 -0.0630556 0.496875 0.0619444 0.309375C0.186944 0.121875 0.476944 0 0.801944 0L7.20194 0C7.52444 0 7.81694 0.121875 7.94194 0.309375C8.06694 0.496875 7.99694 0.710938 7.76944 0.854688L4.56944 2.85469L4.56694 2.85469Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifycontent="unset"
                position="absolute"
                top="56.23%"
                bottom="6.25%"
                left="-0.02%"
                right="-0.02%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="33px"
        direction="row"
        width="unset"
        height="unset"
        justifycontent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="588px"
        left="200px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 12037972999")}
      >
        <Flex
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          gap="0"
          direction="column"
          width="325px"
          height="387px"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 118")}
        >
          <Image
            src="https://f8n-production-collection-assets.imgix.net/0x5A7b58FF44deeA0c28d55075d25c5D595E83a8E3/3/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
            width="325px"
            height="300px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifycontent="unset"
            shrink="0"
            position="relative"
            borderRadius="15px 15px 0px 0px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "nft (1) 337972949")}
          ></Image>
          <Flex
            gap="10px"
            direction="column"
            width="325px"
            height="unset"
            justifycontent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="0px 0px 15px 15px"
            padding="13px 6px 13px 6px"
            backgroundColor="rgba(252,252,252,1)"
            {...getOverrideProps(overrides, "Frame 11637972950")}
          >
            <Flex
              gap="13px"
              direction="column"
              width="94px"
              height="61px"
              justifycontent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 6px"
              {...getOverrideProps(overrides, "Frame 11537972951")}
            >
              <Flex
                gap="6px"
                direction="row"
                width="81px"
                height="21px"
                justifycontent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="25px"
                padding="6px 9px 6px 9px"
                backgroundColor="rgba(217,217,217,0.5)"
                {...getOverrideProps(overrides, "Frame 10137972952")}
              >
                <Image
                  src="https://f8n-production-collection-assets.imgix.net/0x5A7b58FF44deeA0c28d55075d25c5D595E83a8E3/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                  width="15px"
                  height="15px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifycontent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="23px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 337972953")}
                ></Image>
                <Text
                  fontFamily="Inter"
                  fontSize="8px"
                  fontWeight="700"
                  color="rgba(255,255,255,0.8)"
                  lineHeight="12px"
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
                  children="@sanha38"
                  {...getOverrideProps(overrides, "@sanha3837972954")}
                ></Text>
              </Flex>
              <Flex
                gap="1px"
                direction="column"
                width="61px"
                height="unset"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 3px"
                {...getOverrideProps(overrides, "Frame 10537972955")}
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Reserve"
                  {...getOverrideProps(overrides, "Reserve37972956")}
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="1.30 ETH"
                  {...getOverrideProps(overrides, "1.30 ETH37972957")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          gap="0"
          direction="column"
          width="325px"
          height="387px"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 119")}
        >
          <Image
            src="https://f8n-production-collection-assets.imgix.net/0x5A7b58FF44deeA0c28d55075d25c5D595E83a8E3/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
            width="325px"
            height="300px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifycontent="unset"
            shrink="0"
            position="relative"
            borderRadius="15px 15px 0px 0px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "nft (1) 338082819")}
          ></Image>
          <Flex
            gap="10px"
            direction="column"
            width="325px"
            height="unset"
            justifycontent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="0px 0px 15px 15px"
            padding="13px 6px 13px 6px"
            backgroundColor="rgba(252,252,252,1)"
            {...getOverrideProps(overrides, "Frame 11638082820")}
          >
            <Flex
              gap="13px"
              direction="column"
              width="94px"
              height="61px"
              justifycontent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 6px"
              {...getOverrideProps(overrides, "Frame 11538082821")}
            >
              <Flex
                gap="6px"
                direction="row"
                width="81px"
                height="21px"
                justifycontent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="25px"
                padding="6px 9px 6px 9px"
                backgroundColor="rgba(217,217,217,0.5)"
                {...getOverrideProps(overrides, "Frame 10138082822")}
              >
                <Image
                  src="https://f8n-production-collection-assets.imgix.net/0x5A7b58FF44deeA0c28d55075d25c5D595E83a8E3/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                  width="15px"
                  height="15px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifycontent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="23px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 338082823")}
                ></Image>
                <Text
                  fontFamily="Inter"
                  fontSize="8px"
                  fontWeight="700"
                  color="rgba(255,255,255,0.8)"
                  lineHeight="12px"
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
                  children="@sanha38"
                  {...getOverrideProps(overrides, "@sanha3838082824")}
                ></Text>
              </Flex>
              <Flex
                gap="1px"
                direction="column"
                width="61px"
                height="unset"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 3px"
                {...getOverrideProps(overrides, "Frame 10538082825")}
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Reserve"
                  {...getOverrideProps(overrides, "Reserve38082826")}
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="1.30 ETH"
                  {...getOverrideProps(overrides, "1.30 ETH38082827")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          gap="0"
          direction="column"
          width="325px"
          height="387px"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 12038082828")}
        >
          <Image
            src="https://f8n-production-collection-assets.imgix.net/0x5A7b58FF44deeA0c28d55075d25c5D595E83a8E3/4/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
            width="325px"
            height="300px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifycontent="unset"
            shrink="0"
            position="relative"
            borderRadius="15px 15px 0px 0px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "nft (1) 338082829")}
          ></Image>
          <Flex
            gap="10px"
            direction="column"
            width="325px"
            height="unset"
            justifycontent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="0px 0px 15px 15px"
            padding="13px 6px 13px 6px"
            backgroundColor="rgba(252,252,252,1)"
            {...getOverrideProps(overrides, "Frame 11638082830")}
          >
            <Flex
              gap="13px"
              direction="column"
              width="94px"
              height="61px"
              justifycontent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 6px"
              {...getOverrideProps(overrides, "Frame 11538082831")}
            >
              <Flex
                gap="6px"
                direction="row"
                width="81px"
                height="21px"
                justifycontent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="25px"
                padding="6px 9px 6px 9px"
                backgroundColor="rgba(217,217,217,0.5)"
                {...getOverrideProps(overrides, "Frame 10138082832")}
              >
                <Image
                  src="https://f8n-production-collection-assets.imgix.net/0x5A7b58FF44deeA0c28d55075d25c5D595E83a8E3/4/nft.png?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                  width="15px"
                  height="15px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifycontent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="23px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 338082833")}
                ></Image>
                <Text
                  fontFamily="Inter"
                  fontSize="8px"
                  fontWeight="700"
                  color="rgba(255,255,255,0.8)"
                  lineHeight="12px"
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
                  children="@sanha38"
                  {...getOverrideProps(overrides, "@sanha3838082834")}
                ></Text>
              </Flex>
              <Flex
                gap="1px"
                direction="column"
                width="61px"
                height="unset"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 3px"
                {...getOverrideProps(overrides, "Frame 10538082835")}
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Reserve"
                  {...getOverrideProps(overrides, "Reserve38082836")}
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="1.30 ETH"
                  {...getOverrideProps(overrides, "1.30 ETH38082837")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <View
        width="1040px"
        height="1.5px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="absolute"
        top="494.5px"
        left="200px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(161,161,161,1)"
        {...getOverrideProps(overrides, "Rectangle 15")}
      ></View>
    </View>
  );
}
