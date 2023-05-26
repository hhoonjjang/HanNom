/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import { gsap } from "gsap";
const { useEffect, useState } = React;

export default function NFTCreate1(props) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.96 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const { overrides, ...rest } = props;
  return (
    <View
      width="761px"
      height="384px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifycontent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NFTCreate1")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="830px"
        height="450px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="absolute"
        top="-38px"
        left="-39px"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          width="230px"
          height="450px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifycontent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="35px 0px 0px 35px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(240,245,254,0.5)"
          {...getOverrideProps(overrides, "Rectangle 11")}
        ></View>
        <Image
          src="https://f8n-production-collection-assets.imgix.net/0x842F04ac9f1843bA8600995E77814e34643d1c9B/4/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
          width="600px"
          height="450px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifycontent="unset"
          position="absolute"
          top="0px"
          left="230px"
          borderRadius="0px 35px 35px 0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "nft (1) 1")}
        ></Image>
      </View>
      <Flex
        gap="14px"
        direction="column"
        width="unset"
        height="unset"
        justifycontent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="48.44%"
        left="0%"
        right="87.1%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 55")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="500"
          color="rgba(192,192,192,1)"
          lineHeight="18.15340805053711px"
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
          children="CREATE"
          {...getOverrideProps(overrides, "CREATE")}
        ></Text>
        <Flex
          gap="19px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 54")}
        >
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="7px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 49")}
          >
            <Icon
              width="15px"
              height="15px"
              viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
              paths={[
                {
                  d: "M11.915 13.5645C10.6758 14.4668 9.14941 15 7.5 15C4.24512 15 1.47363 12.9258 0.436523 10.0254C0.506836 10.0752 0.609375 10.1309 0.667969 10.1543C1.14551 10.3711 1.84277 9.99609 2.51074 9.31348C2.71289 9.11133 2.93262 8.9502 3.17871 8.80664C3.71484 8.45801 4.28027 8.19727 4.88965 8.00977C4.88965 8.00977 5.54297 9.01172 6.15234 10.2012C6.76172 11.3906 5.49902 11.7832 5.35547 11.7832C5.34668 11.7832 5.33203 11.7832 5.31152 11.7803C4.98926 11.7656 3.26074 11.6924 3.6709 13.2773C4.10742 14.959 6.52734 14.3496 7.76074 13.5381C8.99414 12.7266 8.68945 10.0723 8.68945 10.0723C9.89355 9.88477 10.2715 11.1592 10.3857 11.8125C10.4092 11.9473 10.418 12.1025 10.4268 12.2666C10.459 12.8877 10.4941 13.6025 11.4609 13.626C11.6162 13.626 11.7715 13.6025 11.915 13.5674L11.915 13.5645ZM9.12305 12.8701C9.06445 12.8555 9.02051 12.7969 9.03516 12.7236C9.06445 12.6504 9.12305 12.6211 9.18164 12.6357C9.24023 12.6504 9.28418 12.7236 9.26953 12.7822C9.25488 12.8408 9.19629 12.8848 9.12305 12.8701ZM3.05859 10.0693C3.10254 10.0547 3.16113 10.0986 3.17578 10.1572C3.17578 10.2158 3.14648 10.2744 3.08789 10.2744C3.04395 10.2891 2.98535 10.2451 2.9707 10.1865C2.95605 10.1426 3 10.084 3.05859 10.0693ZM13.2363 12.334C14.335 11.0273 15 9.33984 15 7.5C15 5.52246 14.2354 3.72363 12.9844 2.38184C12.9814 3.07031 12.8057 3.79395 12.4922 4.40918C12.1436 5.00391 11.0566 6.13477 10.4473 6.71484C10.4268 6.72363 10.415 6.74121 10.4033 6.75586C10.3975 6.76172 10.3945 6.76758 10.3887 6.77344C10.2422 6.97559 10.2715 7.26562 10.4766 7.41211C11.1006 7.875 12.1289 8.74805 12.2168 9.54492C12.3193 10.5674 13.0342 11.7598 13.2188 12.0703C13.2422 12.1084 13.2568 12.1318 13.2598 12.1406C13.2598 12.2051 13.248 12.2666 13.2363 12.3311L13.2363 12.334ZM11.4463 7.35352C11.4316 7.44141 11.4756 7.52637 11.5635 7.54102C11.6514 7.55566 11.7363 7.51172 11.751 7.42383C11.7656 7.33594 11.7217 7.25098 11.6338 7.23633C11.5459 7.20703 11.4609 7.26562 11.4463 7.35352ZM13.2451 5.56934L12.9111 5.72754L12.8232 6.10547L12.665 5.77148L12.2871 5.68359L12.6211 5.52539L12.709 5.14746L12.8672 5.48145L13.2451 5.56934ZM11.5869 1.20996C11.1123 1.4502 10.9395 2.1709 10.7373 3.00879C10.7285 3.0498 10.7168 3.09082 10.708 3.13184C10.4297 4.25977 9.81152 4.2334 9.48633 4.22168C9.4541 4.22168 9.42773 4.21875 9.40137 4.21875C9.25195 4.21875 9.22559 4.10156 9.14062 3.71777C9.06445 3.36328 8.93848 2.78027 8.61621 1.85449C7.95117 -0.0732423 6.19336 0.407227 4.86035 1.2041C3.24023 2.17383 3.85254 4.18945 4.28027 5.58105C4.30078 5.64551 4.32129 5.70996 4.33887 5.77441C4.22168 5.8916 3.93457 5.99414 3.57715 6.12305C3.22266 6.24902 2.79785 6.40137 2.39648 6.61816C1.40332 7.14551 0.336914 8.05371 0.0585938 8.45215C0.0205078 8.13867 0 7.82227 0 7.5C0 3.35742 3.35742 0 7.5 0C9.00586 0 10.4121 0.445312 11.5869 1.20996ZM1.72559 5.55469C1.68164 5.49609 1.59375 5.4668 1.53809 5.51074C1.48242 5.55469 1.4502 5.64258 1.49414 5.69824C1.53809 5.75391 1.62598 5.78613 1.68164 5.74219C1.75488 5.69824 1.76953 5.61035 1.72559 5.55469ZM9.58887 1.90137C9.64746 1.85742 9.73535 1.88672 9.77637 1.94531C9.82031 2.01855 9.80566 2.10352 9.73242 2.13281C9.67383 2.17676 9.58594 2.14746 9.54492 2.08887C9.50391 2.03027 9.53027 1.94238 9.58887 1.90137ZM2.78613 3.07617C2.77148 3.12012 2.80078 3.16406 2.84473 3.16406C2.88867 3.17871 2.93262 3.14941 2.93262 3.10547C2.94727 3.06152 2.91797 3.01758 2.87402 3.01758C2.83008 3.01758 2.78613 3.03223 2.78613 3.07617ZM5.26758 3.06152C5.16504 1.79883 6.35449 1.47949 6.35449 1.47949C7.64648 1.02832 7.99512 1.65234 8.2998 2.58105C8.60449 3.50977 8.3877 3.8291 7.16895 4.30664C5.9502 4.78418 5.35547 4.1748 5.26758 3.05859L5.26758 3.06152ZM7.89258 3.49805L7.92188 3.49805C7.99512 3.49805 8.06836 3.43945 8.06836 3.35156C8.12695 3.14941 8.09766 2.92969 8.00977 2.74219C7.96582 2.68359 7.89258 2.63965 7.82227 2.66895C7.73438 2.69824 7.69043 2.78613 7.71973 2.87109C7.77832 3.00293 7.80762 3.16113 7.76367 3.30762C7.74902 3.39551 7.80762 3.48047 7.89551 3.49512L7.89258 3.49805ZM7.60254 2.2793C7.54395 2.2793 7.48535 2.25 7.45605 2.19141C7.42676 2.13281 7.39746 2.08887 7.36816 2.04492C7.30957 1.98633 7.30957 1.88672 7.36816 1.82812C7.42676 1.76953 7.52637 1.76953 7.58496 1.82812C7.64355 1.90137 7.6875 1.97461 7.73145 2.04492C7.77539 2.11523 7.74609 2.21777 7.6582 2.26172C7.64062 2.26172 7.62891 2.26758 7.62012 2.27051C7.61426 2.27344 7.6084 2.27637 7.60254 2.27637L7.60254 2.2793Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector37742831")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="800"
              color="rgba(114,113,113,1)"
              lineHeight="18.15340805053711px"
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
              children="NFT"
              {...getOverrideProps(overrides, "NFT")}
            ></Text>
          </Flex>
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="7px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 50")}
          >
            <Icon
              width="15px"
              height="15px"
              viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
              paths={[
                {
                  d: "M6.81152 0.151626C7.24805 -0.050542 7.75195 -0.050542 8.18848 0.151626L14.5928 3.1109C14.8418 3.22517 15 3.47422 15 3.74963C15 4.02505 14.8418 4.2741 14.5928 4.38837L8.18848 7.34764C7.75195 7.54981 7.24805 7.54981 6.81152 7.34764L0.407227 4.38837C0.158203 4.27117 0 4.02212 0 3.74963C0 3.47715 0.158203 3.22517 0.407227 3.1109L6.81152 0.151626ZM13.0342 6.14049L14.5928 6.86127C14.8418 6.97554 15 7.22458 15 7.5C15 7.77542 14.8418 8.02447 14.5928 8.13873L8.18848 11.098C7.75195 11.3002 7.24805 11.3002 6.81152 11.098L0.407227 8.13873C0.158203 8.02154 0 7.77249 0 7.5C0 7.22751 0.158203 6.97554 0.407227 6.86127L1.96582 6.14049L6.41895 8.19733C7.10449 8.51377 7.89551 8.51377 8.58105 8.19733L13.0342 6.14049ZM8.58105 11.9477L13.0342 9.89086L14.5928 10.6116C14.8418 10.7259 15 10.9749 15 11.2504C15 11.5258 14.8418 11.7748 14.5928 11.8891L8.18848 14.8484C7.75195 15.0505 7.24805 15.0505 6.81152 14.8484L0.407227 11.8891C0.158203 11.7719 0 11.5229 0 11.2504C0 10.9779 0.158203 10.7259 0.407227 10.6116L1.96582 9.89086L6.41895 11.9477C7.10449 12.2641 7.89551 12.2641 8.58105 11.9477Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector37742829")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="800"
              color="rgba(114,113,113,1)"
              lineHeight="18.15340805053711px"
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
              children="Edition"
              {...getOverrideProps(overrides, "Edition")}
            ></Text>
          </Flex>
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="7px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 51")}
          >
            <Icon
              width="15px"
              height="15px"
              viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
              paths={[
                {
                  d: "M10.3125 7.5C10.3125 8.15039 10.2773 8.77734 10.2158 9.375L4.78418 9.375C4.71973 8.77734 4.6875 8.15039 4.6875 7.5C4.6875 6.84961 4.72266 6.22266 4.78418 5.625L10.2158 5.625C10.2803 6.22266 10.3125 6.84961 10.3125 7.5ZM11.1562 5.625L14.7627 5.625C14.918 6.22559 15 6.85254 15 7.5C15 8.14746 14.918 8.77441 14.7627 9.375L11.1562 9.375C11.2178 8.77148 11.25 8.14453 11.25 7.5C11.25 6.85547 11.2178 6.22852 11.1562 5.625ZM14.4551 4.6875L11.0361 4.6875C10.7432 2.81543 10.1631 1.24805 9.41602 0.246094C11.71 0.852539 13.5762 2.5166 14.4521 4.6875L14.4551 4.6875ZM10.0869 4.6875L4.91309 4.6875C5.0918 3.62109 5.36719 2.67773 5.7041 1.91309C6.01172 1.22168 6.35449 0.720703 6.68555 0.404297C7.01367 0.09375 7.28613 0 7.5 0C7.71387 0 7.98633 0.09375 8.31445 0.404297C8.64551 0.720703 8.98828 1.22168 9.2959 1.91309C9.63574 2.6748 9.91113 3.61816 10.0869 4.6875ZM3.96387 4.6875L0.544922 4.6875C1.42383 2.5166 3.28711 0.852539 5.58398 0.246094C4.83691 1.24805 4.25684 2.81543 3.96387 4.6875ZM0.237305 5.625L3.84375 5.625C3.78223 6.22852 3.75 6.85547 3.75 7.5C3.75 8.14453 3.78223 8.77148 3.84375 9.375L0.237305 9.375C0.0820313 8.77441 0 8.14746 0 7.5C0 6.85254 0.0820313 6.22559 0.237305 5.625ZM5.7041 13.084C5.36426 12.3223 5.0918 11.3789 4.91309 10.3125L10.0869 10.3125C9.9082 11.3789 9.63281 12.3223 9.2959 13.084C8.98828 13.7754 8.64551 14.2764 8.31445 14.5928C7.98633 14.9062 7.71387 15 7.5 15C7.28613 15 7.01367 14.9062 6.68555 14.5957C6.35449 14.2793 6.01172 13.7783 5.7041 13.0869L5.7041 13.084ZM3.96387 10.3125C4.25684 12.1846 4.83691 13.752 5.58398 14.7539C3.28711 14.1475 1.42383 12.4834 0.544922 10.3125L3.96387 10.3125ZM14.4551 10.3125C13.5762 12.4834 11.7129 14.1475 9.41895 14.7539C10.166 13.752 10.7432 12.1846 11.0391 10.3125L14.4551 10.3125Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector37742825")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="800"
              color="rgba(114,113,113,1)"
              lineHeight="18.15340805053711px"
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
              children="World"
              {...getOverrideProps(overrides, "World")}
            ></Text>
          </Flex>
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="7px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 53")}
          >
            <Icon
              width="15px"
              height="13.13px"
              viewBox={{ minX: 0, minY: 0, width: 15, height: 13.125 }}
              paths={[
                {
                  d: "M7.51136 2.46973L3.76136 4.93945L7.51136 7.40918L3.76136 9.87891L0 7.38574L3.75852 4.91602L0 2.46973L3.75852 0L7.51136 2.46973ZM3.73864 10.6553L7.48864 8.18555L11.2386 10.6553L7.48864 13.125L3.73864 10.6553ZM7.51136 7.38574L11.2614 4.91602L7.51136 2.4668L11.2415 0L15 2.46973L11.2415 4.93945L15 7.40625L11.2415 9.87598L7.51136 7.38574Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector37742843")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="800"
              color="rgba(114,113,113,1)"
              lineHeight="18.15340805053711px"
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
              children="Drop"
              {...getOverrideProps(overrides, "Drop")}
            ></Text>
          </Flex>
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="7px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 52")}
          >
            <Icon
              width="14.15px"
              height="13.15px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.154296875,
                height: 13.15380859375,
              }}
              paths={[
                {
                  d: "M10.6467 6.21119C10.7501 6.19946 10.8548 6.19946 10.9581 6.21119C11.0137 6.09899 11.0234 5.90563 10.9732 5.69528C10.8985 5.38268 10.7974 5.19313 10.5888 5.22272C10.3802 5.25231 10.3722 5.47877 10.4469 5.79166C10.489 5.96744 10.5637 6.11803 10.6478 6.21119L10.6467 6.21119ZM8.85344 6.45963C9.00311 6.51823 9.09451 6.55514 9.13068 6.52203C9.19396 6.4652 9.01416 6.24694 8.72487 6.13854C8.55784 6.07798 8.3758 6.05609 8.19629 6.07498C8.01678 6.09386 7.84585 6.15288 7.69998 6.24635C7.59954 6.31022 7.50545 6.39928 7.51885 6.45319C7.54731 6.56276 7.85367 6.37379 8.27554 6.35123C8.50992 6.33834 8.70411 6.4025 8.85344 6.45992L8.85344 6.45963ZM8.5521 6.60993C8.24842 6.65153 8.04987 6.80123 8.1011 6.90582C8.13123 6.91578 8.14028 6.92955 8.27554 6.88209C8.47535 6.81609 8.69126 6.79641 8.90233 6.82496C9.0001 6.83492 9.04664 6.8402 9.06773 6.81061C9.11661 6.74557 8.87655 6.57623 8.55244 6.60993L8.5521 6.60993ZM10.3658 7.1109C10.479 6.90963 10.0009 6.7028 9.88704 6.90582C9.7732 7.10885 10.2527 7.31246 10.3665 7.11002L10.3658 7.1109ZM10.8902 6.51119C10.6337 6.50739 10.624 6.97409 10.8815 6.97789C11.1389 6.9817 11.1486 6.51471 10.8908 6.51032L10.8902 6.51119ZM3.5646 8.82272C3.52041 8.8318 3.36371 8.8652 3.28101 8.75387C3.1069 8.5195 3.653 8.1568 3.38146 7.70592C3.07677 7.1941 2.44998 7.30924 2.20791 7.54362C1.91628 7.82487 1.91594 8.23326 2.0405 8.24908C2.18347 8.26578 2.17711 8.05954 2.2876 7.90836C2.31847 7.86668 2.35848 7.83076 2.40531 7.80269C2.45215 7.77462 2.50487 7.75494 2.56045 7.74481C2.61602 7.73467 2.67334 7.73428 2.72909 7.74365C2.78484 7.75301 2.83792 7.77196 2.88525 7.79938C3.27331 8.02174 2.93112 8.31969 2.96159 8.63785C3.00813 9.12653 3.57833 9.11744 3.68414 8.90153C3.69097 8.89087 3.69398 8.87867 3.69279 8.86649C3.6916 8.85432 3.68625 8.84274 3.67744 8.83326C3.67844 8.85934 3.70021 8.79518 3.56527 8.82184L3.5646 8.82272ZM13.5999 8.32262C13.4877 7.97897 13.5138 8.0525 13.3729 7.72145C13.4549 7.61393 13.8848 7.01832 13.2701 6.45436C12.9219 6.13444 12.135 5.96979 11.894 5.91119C11.8437 5.5775 12.0496 4.19147 11.1734 3.47955C11.8695 2.84821 12.3038 2.1527 12.3028 1.55621C12.3008 0.408948 10.6906 0.0620733 8.70612 0.780726L8.28592 0.936878C8.28391 0.935413 7.52554 0.284437 7.51416 0.275647C5.25244 -1.45052 -1.82133 5.42868 0.440387 7.09977L0.934583 7.46627C0.801212 7.77941 0.754179 8.11567 0.797306 8.44772C0.909806 9.42623 2.00266 10.2178 3.05836 10.2167C4.99128 14.1149 12.0282 14.1214 13.8493 10.3046C13.9076 10.1736 14.1543 9.58356 14.1543 9.06295C14.1543 8.54235 13.8165 8.32262 13.6009 8.32262L13.5999 8.32262ZM3.01952 9.73356C2.25545 9.71569 1.43045 9.11393 1.34842 8.40026C1.14184 6.60407 3.83481 6.19508 4.16092 8.03903C4.31293 8.90739 4.00456 9.7526 3.01851 9.73268L3.01952 9.73356ZM2.39976 6.38785C1.89217 6.47428 1.44485 6.72594 1.17097 7.07487C1.00757 6.95563 0.702217 6.7233 0.64898 6.63541C0.213378 5.90739 1.12577 4.49674 1.76394 3.69957C3.34128 1.72994 5.81126 0.239319 6.95534 0.50973C7.14117 0.555726 7.7569 1.18034 7.7569 1.18034C7.7569 1.18034 6.61349 1.73522 5.55378 2.50895C4.12543 3.47135 3.0463 4.86998 2.39976 6.38785ZM10.398 9.35123C10.398 9.35123 9.20132 9.50651 8.07063 9.1441C8.27856 8.55348 8.97465 9.32282 11.2983 8.73952C11.8103 8.61119 12.4826 8.35865 13.0059 7.99684C13.1185 8.22446 13.1986 8.46338 13.2443 8.70817C13.3668 8.68883 13.7214 8.69293 13.6273 9.23844C13.5172 9.82057 13.2346 10.2931 12.7591 10.7279C12.4622 11.0095 12.1087 11.2409 11.7162 11.4108C11.4975 11.511 11.2697 11.5951 11.0351 11.6622C9.24351 12.1743 7.40903 11.6112 6.81639 10.4024C6.76832 10.3101 6.72858 10.2147 6.69753 10.1171C6.44541 9.32018 6.65936 8.36422 7.32833 7.76246C7.36952 7.72408 7.41137 7.67897 7.41137 7.62213C7.40552 7.57319 7.38314 7.52688 7.34708 7.48912C7.11271 7.19235 6.30277 6.68639 6.4655 5.707C6.58269 5.00387 7.28548 4.50846 7.94106 4.53776L8.10847 4.54625C8.3924 4.5609 8.6405 4.59284 8.87454 4.60133C9.26594 4.61598 9.61784 4.56647 10.0344 4.26266C10.175 4.16012 10.2878 4.07106 10.4783 4.04264C10.5553 4.02595 10.6354 4.02316 10.7137 4.03445C10.792 4.04573 10.8669 4.07085 10.9337 4.10826C11.2685 4.3028 11.3154 4.77418 11.3328 5.11871C11.3425 5.31559 11.3696 5.79254 11.379 5.92819C11.4001 6.24078 11.4938 6.28473 11.684 6.33834C11.7908 6.3691 11.8899 6.39196 12.0359 6.42799C12.4782 6.53668 12.739 6.64713 12.9065 6.78864C12.9918 6.86181 13.0476 6.95737 13.0652 7.0608C13.1174 7.39391 12.7698 7.80494 11.8494 8.17877C10.2855 8.81393 8.71282 8.60211 8.48514 8.57955C7.81048 8.50016 7.4261 9.26276 7.83056 9.78512C8.5886 10.7639 11.9288 10.3711 12.8988 9.15963C12.9219 9.13033 12.9028 9.11305 12.8743 9.13033C11.4758 9.96764 9.62454 10.2498 8.5732 9.89205C8.41349 9.83785 8.08001 9.70338 8.03949 9.40368C9.49932 9.79889 10.4167 9.42535 10.4167 9.42535C10.4167 9.42535 10.4847 9.34362 10.398 9.35123ZM5.31304 3.69108C5.87353 3.12418 6.56394 2.63112 7.18235 2.35426C7.18702 2.35184 7.19248 2.35085 7.19786 2.35145C7.20324 2.35204 7.20824 2.35419 7.21208 2.35754C7.21592 2.3609 7.21837 2.36528 7.21905 2.36999C7.21973 2.3747 7.2186 2.37947 7.21583 2.38356C7.16695 2.46149 7.07219 2.62789 7.04206 2.75416C7.04086 2.7585 7.0412 2.76306 7.04304 2.76723C7.04487 2.77139 7.04812 2.77497 7.05233 2.77749C7.05655 2.78 7.06155 2.78133 7.06665 2.7813C7.07175 2.78127 7.07672 2.77987 7.0809 2.77731C7.46561 2.54791 8.13492 2.30211 8.72152 2.27047C8.72705 2.27014 8.73256 2.27138 8.73722 2.274C8.74188 2.27662 8.74545 2.28049 8.74741 2.28502C8.74936 2.28956 8.74959 2.29453 8.74806 2.29919C8.74654 2.30385 8.74334 2.30796 8.73894 2.3109C8.64193 2.3763 8.55515 2.45253 8.48079 2.53766C8.4781 2.5409 8.47648 2.54473 8.4761 2.54872C8.47571 2.55272 8.47659 2.55673 8.47862 2.56032C8.48066 2.56391 8.48377 2.56694 8.48764 2.56909C8.4915 2.57124 8.49596 2.57243 8.50054 2.57252C8.91271 2.57516 9.49362 2.70143 9.87331 2.88717C9.89876 2.89977 9.88068 2.94313 9.85188 2.93756C7.5232 2.47057 5.7309 3.48043 5.34853 3.7236C5.34344 3.72647 5.33734 3.72766 5.33133 3.72695C5.32532 3.72623 5.3198 3.72367 5.31577 3.71971C5.31173 3.71575 5.30944 3.71067 5.30931 3.70536C5.30918 3.70006 5.31121 3.69489 5.31505 3.69078L5.31304 3.69108Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector37742837")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="800"
              color="rgba(114,113,113,1)"
              lineHeight="18.15340805053711px"
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
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="142px"
        direction="row"
        width="unset"
        height="unset"
        justifycontent="flex-start"
        alignItems="flex-end"
        position="absolute"
        top="77.86%"
        bottom="0%"
        left="29.04%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 57")}
      >
        <Flex
          gap="7px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 56")}
        >
          <Text
            fontFamily="Inter"
            fontSize="35px"
            fontWeight="800"
            color="rgba(242,242,242,1)"
            lineHeight="42.35795211791992px"
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
            children="Mint an NFT"
            {...getOverrideProps(overrides, "Mint an NFT")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(242,242,242,1)"
            lineHeight="18.15340805053711px"
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
            children="Create a new NFT and mint it one of your&#xA;own ERC-721 smart contracts."
            {...getOverrideProps(
              overrides,
              "Create a new NFT and mint it one of your own ERC-721 smart contracts."
            )}
          ></Text>
        </Flex>
        <Button
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          width="unset"
          height="unset"
          borderRadius="35px"
          shrink="0"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Mint +"
          {...getOverrideProps(overrides, "Button37742872")}
        ></Button>
      </Flex>
      <Button
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        width="37px"
        height="37px"
        position="absolute"
        borderRadius="35px"
        top="-5px"
        left="690px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="X"
        {...getOverrideProps(overrides, "Button37742878")}
      ></Button>
    </View>
  );
}
