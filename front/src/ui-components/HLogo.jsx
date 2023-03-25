/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
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
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HLogo")}
      {...rest}
    >
      <Icon
        width="21px"
        height="21px"
        viewBox={{ minX: 0, minY: 0, width: 21, height: 21 }}
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
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <View
        width="21px"
        height="21px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,226,0,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Icon
        width="28px"
        height="28px"
        viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
        paths={[
          {
            d: "M14 0L14.866 -0.5L14 -2L13.134 -0.5L14 0ZM26.1244 21L26.1244 22L27.8564 22L26.9904 20.5L26.1244 21ZM1.87564 21L1.00962 20.5L0.143594 22L1.87564 22L1.87564 21ZM13.134 0.5L25.2583 21.5L26.9904 20.5L14.866 -0.5L13.134 0.5ZM26.1244 20L1.87564 20L1.87564 22L26.1244 22L26.1244 20ZM2.74167 21.5L14.866 0.5L13.134 -0.5L1.00962 20.5L2.74167 21.5Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M14 0L26.1244 21L1.87564 21L14 0Z",
            fill: "rgba(0,136,153,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Polygon 1")}
      ></Icon>
    </Flex>
  );
}
