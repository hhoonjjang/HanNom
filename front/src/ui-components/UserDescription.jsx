/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";

export default function UserDescription(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UserDescription")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="1440px"
        height="760px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 131")}
      >
        <Image
          src={props.nft.image}
          // "https://f8n-production-collection-assets.imgix.net/0x50dC15DcA7B2c2f273ea5269F8FBeF8B291695a4/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
          width="450px"
          height="600px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "nft (5) 5")}
        ></Image>
      </Flex>
      <Flex
        gap="361px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 139")}
      >
        <Flex
          gap="19px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 137")}
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
            children={`NFTTokenName #${props.tokenId}`}
            // "Celestial Portals #6"
            {...getOverrideProps(overrides, "Celestial Portals #6")}
          ></Text>
          <Flex
            gap="31px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 136")}
          >
            <Flex
              gap="-3px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 1038242962")}
            >
              <Flex
                gap="7px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 132")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  color="rgba(124,124,124,1)"
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
                  children="Created By"
                  {...getOverrideProps(overrides, "Created By")}
                ></Text>
                <Flex
                  gap="7px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="20px"
                  padding="5px 8px 5px 8px"
                  backgroundColor="rgba(234,0,50,0.55)"
                  {...getOverrideProps(overrides, "Frame 8")}
                >
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/108/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="25px"
                    height="25px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="128px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 138242965")}
                  ></Image>
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="700"
                    color="rgba(255,255,253,1)"
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
                    children="@Sanha38"
                    {...getOverrideProps(overrides, "@Sanha38")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="-3px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 11")}
            >
              <Flex
                gap="7px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 13338242984")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  color="rgba(124,124,124,1)"
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
                  children="Collection"
                  {...getOverrideProps(overrides, "Collection")}
                ></Text>
                <Flex
                  gap="7px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="20px"
                  padding="5px 8px 5px 8px"
                  backgroundColor="rgba(255,226,0,0.55)"
                  {...getOverrideProps(overrides, "Frame 938242969")}
                >
                  <Image
                    src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/108/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                    width="25px"
                    height="25px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="128px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 138242970")}
                  ></Image>
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="700"
                    color="rgba(255,255,253,1)"
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
                    children="@Colorful Imagination"
                    {...getOverrideProps(overrides, "@Colorful Imagination")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="19px"
          direction="column"
          width="340px"
          height="270px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 138")}
        >
          <Flex
            gap="-3px"
            direction="column"
            width="340px"
            height="68px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 15")}
          >
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 13438242985")}
            >
              <Flex
                gap="14px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 1038242973")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  color="rgba(124,124,124,1)"
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
                  children="Current Price"
                  {...getOverrideProps(overrides, "Current Price")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(114,113,113,1)"
                lineHeight="30px"
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
                children={`${props.nft.price} ETH`}
                {...getOverrideProps(overrides, "0.25ETH")}
              ></Text>
            </Flex>
          </Flex>
          <Button
            width="191px"
            height="33px"
            borderRadius="35px"
            shrink="0"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            backgroundColor="rgba(0,136,153,0.55)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Buy"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <Flex
            gap="-3px"
            direction="column"
            width="340px"
            height="20px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            style={{ borderTop: "1px SOLID rgba(124,124,124,1)" }}
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 14")}
          >
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 135")}
            >
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="500"
                color="rgba(124,124,124,1)"
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
                children="Time Remaining"
                {...getOverrideProps(overrides, "Time Remaining")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(114,113,113,1)"
                lineHeight="30px"
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
                children="12h 53m 56s"
                {...getOverrideProps(overrides, "12h 53m 56s")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="121px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 143")}
      >
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 141")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="580px"
            height="80px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            style={{ borderTop: "1px SOLID rgba(124,124,124,1)" }}
            padding="9px 9px 9px 9px"
            {...getOverrideProps(overrides, "Frame 14038242995")}
          >
            <Text
              fontFamily="Inter"
              fontSize="26px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="39px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="155px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Description"
              {...getOverrideProps(overrides, "Description")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(124,124,124,1)"
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
            children="Rainbow Body&#xA;~&#xA;Celestial Portals is a visual journey through the spiritual space that &#xA;exists within us, around us, and beyond us, as we move through one &#xA;world and into another.&#xA;--&#xA;AI assisted imagery&#xA;1546 x 2048"
            // back에서 description을 만들어주면 갖다 붙이는 곳. description이 아직 없다.
            {...getOverrideProps(
              overrides,
              "Rainbow Body ~ Celestial Portals is a visual journey through the spiritual space that exists within us, around us, and beyond us, as we move through one world and into another. -- AI assisted imagery 1546 x 2048"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 142")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="340px"
            height="80px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            style={{ borderTop: "1px SOLID rgba(124,124,124,1)" }}
            padding="9px 9px 9px 9px"
            {...getOverrideProps(overrides, "Frame 14038242999")}
          >
            <Text
              fontFamily="Inter"
              fontSize="26px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="39px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="155px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Provenance"
              {...getOverrideProps(overrides, "Provenance")}
            ></Text>
          </Flex>
          <Flex
            gap="14px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 12")}
          >
            <Flex
              gap="7px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 13338243009")}
            >
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="500"
                color="rgba(124,124,124,1)"
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
                children="By @sanha38"
                {...getOverrideProps(overrides, "By @sanha38")}
              ></Text>
              <Flex
                gap="7px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="20px"
                padding="5px 8px 5px 8px"
                backgroundColor="rgba(255,226,0,0.55)"
                {...getOverrideProps(overrides, "Frame 938243011")}
              >
                <Image
                  src="https://f8n-production-collection-assets.imgix.net/0x875B8Ff3203B4Fce10eFB56Db923a52297672380/108/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
                  width="25px"
                  height="25px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="128px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 138243012")}
                ></Image>
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="700"
                  color="rgba(255,255,253,1)"
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
                  children="@sanha38"
                  {...getOverrideProps(overrides, "@sanha38")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="7px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 13438243014")}
            >
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="500"
                color="rgba(124,124,124,1)"
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
                children="Sold for 0.15 ETH"
                {...getOverrideProps(overrides, "Sold for 0.15 ETH")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="500"
                color="rgba(124,124,124,1)"
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
                children="Mar 26, 2023 at 10:10am"
                {...getOverrideProps(overrides, "Mar 26, 2023 at 10:10am")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
