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

export default function NftRank(props) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.96 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const { overrides, ...rest } = props;
  return (
    <View
      width="1010px"
      height="744px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NftRank")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="1px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 122")}
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
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Trending"
          {...getOverrideProps(overrides, "Trending")}
        ></Text>
        <Flex
          gap="658px"
          direction="row"
          width="unset"
          height="58px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(243,243,243,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 92")}
        >
          <Flex
            gap="32px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 90")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
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
              children="Creators"
              {...getOverrideProps(overrides, "Creators")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="18px"
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
              children="Collectors"
              {...getOverrideProps(overrides, "Collectors37945239")}
            ></Text>
          </Flex>
          <Flex
            gap="32px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 91")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
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
              children="1d"
              {...getOverrideProps(overrides, "1d")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="18px"
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
              children="7d"
              {...getOverrideProps(overrides, "7d")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="18px"
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
              children="30d"
              {...getOverrideProps(overrides, "30d")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="18px"
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
              children="All Time"
              {...getOverrideProps(overrides, "All Time")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="1010px"
          height="605px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 121")}
        >
          <Flex
            gap="264px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 94")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
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
              children="Rank"
              {...getOverrideProps(overrides, "Rank")}
            ></Text>
            <Flex
              gap="85px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 93")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="18px"
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
                children="Collectors"
                {...getOverrideProps(overrides, "Collectors37945293")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="18px"
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
                children="NFTs Sold"
                {...getOverrideProps(overrides, "NFTs Sold")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="18px"
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
                children="Primary Sales"
                {...getOverrideProps(overrides, "Primary Sales")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="18px"
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
                children="Secondary Sales"
                {...getOverrideProps(overrides, "Secondary Sales")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="18px"
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
                children="Total Sales"
                {...getOverrideProps(overrides, "Total Sales")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="33px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="15px"
            padding="17px 20px 20px 10px"
            backgroundColor="rgba(252,252,252,1)"
            {...getOverrideProps(overrides, "Frame 86")}
          >
            <Flex
              gap="9px"
              direction="row"
              width="978px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 83")}
            >
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="300"
                color="rgba(0,0,0,1)"
                lineHeight="22.5px"
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
                children="#1"
                {...getOverrideProps(overrides, "#1")}
              ></Text>
              <Flex
                gap="173px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 124")}
              >
                <Flex
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 123")}
                >
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0xE1353314687F7a680d00BE81Db940141f1056d0F/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="30px"
                    height="30px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 5")}
                  ></Image>
                  <Flex
                    gap="0"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="center"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 82")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="15px"
                      fontWeight="700"
                      color="rgba(0,0,0,1)"
                      lineHeight="22.5px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="65px"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="sanha38"
                      {...getOverrideProps(overrides, "sanha38")}
                    ></Text>
                    <Text
                      fontFamily="Inter"
                      fontSize="8px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="12px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="65px"
                      height="8px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="@sanha38"
                      {...getOverrideProps(overrides, "@sanha38")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="154px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 85")}
                >
                  <Flex
                    gap="138px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 84")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="11px"
                      fontWeight="600"
                      color="rgba(0,0,0,1)"
                      lineHeight="16.5px"
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
                      children="5"
                      {...getOverrideProps(overrides, "537922936")}
                    ></Text>
                    <Text
                      fontFamily="Inter"
                      fontSize="11px"
                      fontWeight="600"
                      color="rgba(0,0,0,1)"
                      lineHeight="16.5px"
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
                      children="5"
                      {...getOverrideProps(overrides, "537922937")}
                    ></Text>
                    <Flex
                      gap="123px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 98")}
                    >
                      <Flex
                        gap="5px"
                        direction="row"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="center"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 95")}
                      >
                        <Text
                          fontFamily="Inter"
                          fontSize="11px"
                          fontWeight="600"
                          color="rgba(0,0,0,1)"
                          lineHeight="16.5px"
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
                          children="5.35"
                          {...getOverrideProps(overrides, "5.3537922939")}
                        ></Text>
                        <Text
                          fontFamily="Inter"
                          fontSize="7px"
                          fontWeight="600"
                          color="rgba(0,0,0,1)"
                          lineHeight="10.5px"
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
                          children="ETH"
                          {...getOverrideProps(overrides, "ETH37945303")}
                        ></Text>
                      </Flex>
                      <Flex
                        gap="5px"
                        direction="row"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="center"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 96")}
                      >
                        <Text
                          fontFamily="Inter"
                          fontSize="11px"
                          fontWeight="600"
                          color="rgba(0,0,0,1)"
                          lineHeight="16.5px"
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
                          children="5.35"
                          {...getOverrideProps(overrides, "5.3537945306")}
                        ></Text>
                        <Text
                          fontFamily="Inter"
                          fontSize="7px"
                          fontWeight="600"
                          color="rgba(0,0,0,1)"
                          lineHeight="10.5px"
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
                          children="ETH"
                          {...getOverrideProps(overrides, "ETH37945307")}
                        ></Text>
                      </Flex>
                      <Flex
                        gap="5px"
                        direction="row"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="center"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 97")}
                      >
                        <Text
                          fontFamily="Inter"
                          fontSize="11px"
                          fontWeight="600"
                          color="rgba(0,0,0,1)"
                          lineHeight="16.5px"
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
                          children="5.35"
                          {...getOverrideProps(overrides, "5.3537945309")}
                        ></Text>
                        <Text
                          fontFamily="Inter"
                          fontSize="7px"
                          fontWeight="600"
                          color="rgba(0,0,0,1)"
                          lineHeight="10.5px"
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
                          children="ETH"
                          {...getOverrideProps(overrides, "ETH37945310")}
                        ></Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
