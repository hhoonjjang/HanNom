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
  console.log("아이템리스트", props.tokenList);
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.03 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const { overrides, ...rest } = props;
  return (
    <>
      {props.tokenlist ? (
        <View
          width="197px"
          height="331px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifycontent="unset"
          position="relative"
          padding="0px 0px 0px 0px"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          {...getOverrideProps(overrides, "UserInfoCompo3")}
          {...rest}
        >
          <Image
            src={`http://localhost:8080${props.tokenlist.nftImg}`}
            width="100%"
            height="71.6%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifycontent="unset"
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
            justifycontent="unset"
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
            justifycontent="flex-start"
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
              src={`http://localhost:8080${props.address.profileImg}`}
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
              justifycontent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`@${props.tokenlist.nftName}`}
              {...getOverrideProps(overrides, "@UserName")}
            ></Text>
          </Flex>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
