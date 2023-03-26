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
import { Link } from "react-router-dom";
import axios from "axios";
export default function AfterHeader(props) {
  const { overrides, ...rest } = props;

  return (
    <View
      width="1440px"
      height="74px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
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
        justifyContent="unset"
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
          justifyContent="flex-start"
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
            justifyContent="flex-start"
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
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Feed"
            {...getOverrideProps(overrides, "Feed")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="21px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="25.414772033691406px"
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
            children="Explore"
            {...getOverrideProps(overrides, "Explore")}
          ></Text>
        </Flex>
      </Link>
      <Flex
        gap="10px"
        direction="row"
        width="229px"
        height="33px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="27.03%"
        bottom="28.38%"
        left="80.35%"
        right="13.89%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 36")}
      >
        <Icon
          width="28px"
          height="28px"
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
          paths={[
            {
              d: "M26.5 14C26.5 20.9036 20.9036 26.5 14 26.5L14 29.5C22.5604 29.5 29.5 22.5604 29.5 14L26.5 14ZM14 26.5C7.09644 26.5 1.5 20.9036 1.5 14L-1.5 14C-1.5 22.5604 5.43959 29.5 14 29.5L14 26.5ZM1.5 14C1.5 7.09644 7.09644 1.5 14 1.5L14 -1.5C5.43959 -1.5 -1.5 5.43959 -1.5 14L1.5 14ZM14 1.5C20.9036 1.5 26.5 7.09644 26.5 14L29.5 14C29.5 5.43959 22.5604 -1.5 14 -1.5L14 1.5Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z",
              fill: "rgba(246,247,248,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 3")}
        ></Icon>
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
