/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
import { gsap } from "gsap";
const { useEffect, useState } = React;

export default function NFTCreate2(props) {
  const { overrides, ...rest } = props;
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <View
      width="580px"
      height="720px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifycontent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NFTCreate2")}
      {...rest}
    >
      <View
        width="580px"
        height="720px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Rectangle 12")}
      ></View>
      <Image
        src="https://f8n-production-collection-assets.imgix.net/0x842F04ac9f1843bA8600995E77814e34643d1c9B/5/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        {...getOverrideProps(overrides, "Dust")}
      ></Image>
      <Flex
        gap="35px"
        direction="column"
        width="unset"
        height="unset"
        justifycontent="center"
        alignItems="center"
        position="absolute"
        top="3.26%"
        bottom="3.4%"
        left="21.55%"
        right="21.72%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 62")}
      >
        <Flex
          gap="7px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 57")}
        >
          <Text
            fontFamily="Inter"
            fontSize="35px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="42.35795211791992px"
            textAlign="center"
            display="block"
            direction="column"
            justifycontent="unset"
            width="206px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Mint an NFT"
            {...getOverrideProps(overrides, "Mint an NFT")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(243,248,247,1)"
            lineHeight="21px"
            textAlign="center"
            display="block"
            direction="column"
            justifycontent="unset"
            width="294px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="To mint an NFT, you firt need&#xA;to deploy a smart contract."
            {...getOverrideProps(
              overrides,
              "To mint an NFT, you firt need to deploy a smart contract."
            )}
          ></Text>
        </Flex>
        <Flex
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          gap="10px"
          direction="column"
          width="unset"
          height="380px"
          justifycontent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          border="1.5px dashed rgba(0,0,0,1)"
          borderRadius="15px"
          padding="21.5px 24.5px 21.5px 24.5px"
          {...getOverrideProps(overrides, "Frame 60")}
        >
          <Flex
            gap="27px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 59")}
          >
            <View
              width="100px"
              height="100px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              border="1.5px dashed rgba(0,0,0,1)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Rectangle 14")}
            ></View>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifycontent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="35px"
              padding="4px 20px 4px 20px"
              backgroundColor="rgba(232,238,221,0.65)"
              {...getOverrideProps(overrides, "Frame 58")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="21px"
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
                children="ERC-721"
                {...getOverrideProps(overrides, "ERC-721")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="7px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 61")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(243,248,247,1)"
            lineHeight="21px"
            textAlign="center"
            display="block"
            direction="column"
            justifycontent="unset"
            width="329px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Foundation contracts allow you to deploy best-in-class smart contracts that you own and can use across all of web3."
            {...getOverrideProps(
              overrides,
              "Foundation contracts allow you to deploy best-in-class smart contracts that you own and can use across all of web3."
            )}
          ></Text>
        </Flex>
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
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </View>
  );
}
