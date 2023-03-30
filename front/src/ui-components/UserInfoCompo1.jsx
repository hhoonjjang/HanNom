/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import { gsap } from "gsap";
import { timeStamp } from "../api/time.js";
const { useEffect, useState } = React;

export default function UserInfoCompo1(props) {
  console.log("웰하우스", props);
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.03 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="58px"
      direction="row"
      width="402px"
      height="unset"
      justifycontent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UserInfoCompo1")}
      {...rest}
    >
      <Flex
        gap="14px"
        direction="column"
        width="unset"
        height="unset"
        justifycontent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 17")}
      >
        <Text
          fontFamily="Inter"
          fontSize="35px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
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
          children={props.token ? "“" + props.token.nftName + "”" : ""}
          {...getOverrideProps(overrides, "\u201CIt Will Never End\u201D")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="500"
          color="rgba(192,192,192,1)"
          lineHeight="22.5px"
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
          children="Nft description"
          {...getOverrideProps(overrides, "Current bid")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
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
          children={props.token ? props.token.nftDescription : ""}
          {...getOverrideProps(overrides, "0.25ETH")}
        ></Text>
        <Flex
          gap="1px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1037512756")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(192,192,192,1)"
            lineHeight="22.5px"
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
            children="Created By"
            {...getOverrideProps(overrides, "Created By")}
          ></Text>
          <Flex
            gap="7px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="20px"
            padding="5px 8px 5px 8px"
            backgroundColor="rgba(234,0,50,1)"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            {...getOverrideProps(overrides, "Frame 8")}
          >
            <Image
              src={props.token ? `${props.token.User.profileImg}` : ""}
              width="25px"
              height="25px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              borderRadius="128px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "ghrgclzzd 137512745")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(255,255,253,1)"
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
              children={props.token ? `@${props.token.User.userName}` : ""}
              {...getOverrideProps(overrides, "@Aaaaart")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="1px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 11")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(192,192,192,1)"
            lineHeight="22.5px"
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
            children="Collection"
            {...getOverrideProps(overrides, "Collection")}
          ></Text>
          <Flex
            gap="7px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="20px"
            padding="5px 8px 5px 8px"
            backgroundColor="rgba(255,226,0,1)"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            {...getOverrideProps(overrides, "Frame 9")}
          >
            <Image
              src={props.token ? `${props.token.User.backgroundImg}` : ""}
              width="25px"
              height="25px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              borderRadius="128px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "ghrgclzzd 137512753")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(255,255,253,1)"
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
              children={
                props.token
                  ? `@${props.token.User.userAddress.slice(0, 16) + "..."}`
                  : ""
              }
              {...getOverrideProps(overrides, "@Colorful Imagination")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="1px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 15")}
        >
          <Flex
            gap="14px"
            direction="column"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 1037512760")}
          ></Flex>
        </Flex>
        <Flex
          gap="1px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 14")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(192,192,192,1)"
            lineHeight="22.5px"
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
            children="Provenance"
            {...getOverrideProps(overrides, "Auction ends in")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
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
            children={props.token ? timeStamp(props.token.createdAt) : ""}
            {...getOverrideProps(overrides, "12h 53m 56s")}
          ></Text>
        </Flex>
        <Button
          width="191px"
          height="33px"
          borderRadius="35px"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="View Connect"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
