/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import logo from "./images/logo.png";
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function HLogo(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="2px"
      direction="row"
      width="unset"
      height="21px"
      justifycontent="flex-end"
      alignItems="flex-end"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HLogo")}
      {...rest}
    >
      {/* <Icon
        width="21px"
        height="21px"
        viewBox={{ minX: 0, minY: 0, width: 21, height: 21 }}
        display="block"
        gap="unset"
        paths={[
          {
            d: "M20 10.5C20 15.7467 15.7467 20 10.5 20L10.5 22C16.8513 22 22 16.8513 22 10.5L20 10.5ZM10.5 20C5.25329 20 1 15.7467 1 10.5L-1 10.5C-1 16.8513 4.14873 22 10.5 22L10.5 20ZM1 10.5C1 5.25329 5.25329 1 10.5 1L10.5 -1C4.14873 -1 -1 4.14873 -1 10.5L1 10.5ZM10.5 1C15.7467 1 20 5.25329 20 10.5L22 10.5C22 4.14873 16.8513 -1 10.5 -1L10.5 1Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M21 10.5C21 16.299 16.299 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5Z",
            fill: "rgba(234,0,50,1)",
            fillRule: "nonzero",
          },
        ]}
        alignItems="unset"
        justifycontent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon> */}
      <img
        src={logo}
        width="70px"
        height="30px"
        justifycontent="flex-end"
        // alignItems="flex-end"
        viewBox={{ minX: 0, minY: 0, width: 21, height: 21 }}
        display="block"
        gap="unset"
      />
    </Flex>
  );
}
