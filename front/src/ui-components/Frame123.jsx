/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, TextField, View } from "@aws-amplify/ui-react";
export default function Frame123(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1159px"
      height="764px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifycontent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Frame123")}
      {...rest}
    >
      <Button
        width="117px"
        height="42px"
        position="absolute"
        top="351px"
        bottom="371px"
        left="127px"
        size="default"
        isDisabled={false}
        variation="default"
        children="NFT IMG"
        {...getOverrideProps(overrides, "Button36472694")}
      ></Button>
      <TextField
        width="9px"
        height="72px"
        label="NFT 그룹 등록자"
        position="absolute"
        top="72px"
        left="774px"
        right="376px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField36472699")}
      ></TextField>
      <TextField
        width="9px"
        height="72px"
        label="NFT 그룹명"
        placeholder="Input the NFT group’s name"
        position="absolute"
        top="192px"
        left="774px"
        right="376px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField36472706")}
      ></TextField>
      <TextField
        width="9px"
        height="72px"
        label="NFT 그룹의 테마"
        placeholder="Input the NFT group’s theme"
        position="absolute"
        top="320px"
        left="774px"
        right="376px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField36472713")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        borderRadius="6px"
        top="483px"
        left="878px"
        size="default"
        isDisabled={false}
        variation="default"
        children="취소"
        {...getOverrideProps(overrides, "Button36472720")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        borderRadius="6px"
        top="483px"
        left="995px"
        size="default"
        isDisabled={false}
        variation="default"
        children="확인"
        {...getOverrideProps(overrides, "Button36472724")}
      ></Button>
      <Image
        width="213px"
        height="calc(100% - 508px)"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="absolute"
        top="72px"
        bottom="436px"
        left="80px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "'PUW(U( 1")}
      ></Image>
    </View>
  );
}
