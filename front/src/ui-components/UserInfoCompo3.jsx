/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import { gsap } from "gsap";
const { useEffect, useState } = React;
export default function UserInfoCompo3(props) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.03 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const { overrides, ...rest } = props;
  return (
    <View
      width="197px"
      height="331px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...getOverrideProps(overrides, "UserInfoCompo3")}
      {...rest}
    >
      <Image
        src="https://f8n-production-collection-assets.imgix.net/0x042d58c2bc8Db5edc502952E343f5d3c5b7EE8fd/1/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
        width="100%"
        height="71.6%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="28.4%"
        left="0%"
        right="0%"
        borderRadius="15px 15px 0px 0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "nft (5) 3")}
      ></Image>
      <View
        width="197px"
        height="94px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="71.6%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="0px 0px 15px 15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(253,253,253,1)"
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></View>
      <Flex
        gap="7px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="82.18%"
        bottom="10.88%"
        left="3.55%"
        right="49.75%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 33")}
      >
        <Image
          src="https://f8n-production-collection-assets.imgix.net/0xE1353314687F7a680d00BE81Db940141f1056d0F/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
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
          {...getOverrideProps(overrides, "ghrgclzzd 4")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(0,0,0,0.8)"
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
          children="@UserName"
          {...getOverrideProps(overrides, "@UserName")}
        ></Text>
      </Flex>
    </View>
  );
}
