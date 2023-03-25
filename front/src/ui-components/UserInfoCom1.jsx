/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
import UserInfoCompo1 from "./UserInfoCompo1";

import { gsap } from "gsap";
const { useEffect, useState } = React;

export default function UserInfoCom1(props) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.03 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="115px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UserInfoCom1")}
      {...rest}
    >
      <Image
        src="https://f8n-production-collection-assets.imgix.net/0xE1353314687F7a680d00BE81Db940141f1056d0F/4/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
        width="274.32px"
        height="360px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        {...getOverrideProps(overrides, "nft (5) 1")}
      ></Image>
      <UserInfoCompo1
        display="flex"
        gap="58px"
        direction="row"
        width="402px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "UserInfoCompo1")}
      ></UserInfoCompo1>
    </Flex>
  );
}
