/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function RedButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifycontent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RedButton")}
      {...rest}
    >
      <Button
        width="191px"
        height="33px"
        borderRadius="35px"
        shrink="0"
        backgroundColor="rgba(234,0,50,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Browser All"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
