//백업
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";
import { timeStamp } from "../api/time.js";
export default function UserDescription(props) {
  const [user, setUser] = React.useState(document.cookie.split("=")[0]);
  console.log("dasdasdawd", user);
  const navigate = useNavigate();
  console.log("props.nft화긴", props.nft);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!document.cookie) {
      alert("NFT의 상세한 정보를 확인하기 위해선 로그인해야 합니다.");
      navigate("/");
    }
  }, []);

  const buyFunc = async () => {
    try {
      dispatch(isLoadingThunk({ isLoading: true }));
      console.log(user);
      const data = (
        await axios.post("http://localhost:8080/api/mint/buy", {
          tokenId: props.nft.tokenId,
          account: user,
          price: props.nft.price.toString(),
          owner: props.nft.buyerAddress ? props.nft.buyerAddress : null,
        })
      ).data;
      console.log(data);
      console.log(await props.web3);
      console.log("1123", data.data);
      await props.web3.eth.sendTransaction(data);
      // console.log(test);
      // result.account = account;
      console.log("넌 못지나간다");
      await axios.post("http://localhost:8080/api/mint/buyComplete", {
        tokenId: props.nft.tokenId,
        account: user,
      });
      dispatch(isLoadingThunk({ isLoading: false }));
      navigate(`/`);
    } catch (error) {
      dispatch(isLoadingThunk({ isLoading: false }));
      console.error(error);
    }
  };

  const { overrides, ...rest } = props;
  return props.nft.length != 0 ? (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifycontent="flex-start"
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
        justifycontent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 131")}
      >
        <Image
          src={`http://localhost:8080${props.nft.Nft.nftImg}`}
          // "https://f8n-production-collection-assets.imgix.net/0x50dC15DcA7B2c2f273ea5269F8FBeF8B291695a4/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
          width="450px"
          height="600px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifycontent="unset"
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
        justifycontent="flex-start"
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
          justifycontent="flex-start"
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
            justifycontent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${props.nft.Nft.nftName} #${props.nft.tokenId}`}
            // "Celestial Portals #6"
            {...getOverrideProps(overrides, "Celestial Portals #6")}
          ></Text>
          <Flex
            gap="31px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
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
              justifycontent="flex-start"
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
                justifycontent="flex-start"
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="20px"
                  padding="5px 8px 5px 8px"
                  backgroundColor="rgba(234,0,50,0.55)"
                  {...getOverrideProps(overrides, "Frame 8")}
                >
                  <Image
                    src={`http://localhost:8080${props.nft.Nft.User.profileImg}`}
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
                    justifycontent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={props.nft.Nft.User.userName}
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
              justifycontent="flex-start"
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
                justifycontent="flex-start"
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="NFT 판매자"
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="20px"
                  padding="5px 8px 5px 8px"
                  backgroundColor="rgba(255,226,0,0.55)"
                  {...getOverrideProps(overrides, "Frame 938242969")}
                >
                  <Image
                    src={`http://localhost:8080${props.nft.Nft.User.backgroundImg}`}
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
                      props.nft.Nft.User.userAddress.slice(0, 15) + "..."
                    }
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
          justifycontent="center"
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
            justifycontent="center"
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
              justifycontent="center"
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
                justifycontent="flex-start"
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
                  justifycontent="unset"
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
                justifycontent="unset"
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
          {props.nft.Nft.userAddress != user ? (
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
              onClick={() => {
                console.log("안녕하세요");
                buyFunc();
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          ) : (
            <Button
              width="191px"
              height="33px"
              borderRadius="35px"
              shrink="0"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              backgroundColor="rgba(0,0,0,0.85)"
              color="white"
              size="small"
              isDisabled={false}
              variation="primary"
              children="나의 토큰"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          )}
          <Flex
            gap="-3px"
            direction="column"
            width="340px"
            height="20px"
            justifycontent="flex-start"
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
              justifycontent="flex-start"
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
                justifycontent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Created Mint"
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
                justifycontent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={timeStamp(props.nft.Nft.createdAt)}
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
        justifycontent="flex-start"
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
          justifycontent="flex-start"
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
            justifycontent="flex-start"
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
              justifycontent="unset"
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
            justifycontent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 10px"
            whiteSpace="pre-wrap"
            children={props.nft.Nft.nftDescription}
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
          justifycontent="center"
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
            justifycontent="flex-start"
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
              justifycontent="unset"
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
            justifycontent="center"
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
              justifycontent="flex-start"
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
                justifycontent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={`By @${props.nft.Nft.User.userName}`}
                {...getOverrideProps(overrides, "By @sanha38")}
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
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="20px"
                padding="5px 8px 5px 8px"
                backgroundColor="rgba(255,226,0,0.55)"
                {...getOverrideProps(overrides, "Frame 938243011")}
              >
                <Image
                  src={`http://localhost:8080${props.nft.Nft.User.backgroundImg}`}
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
                  justifycontent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`@${
                    props.nft.Nft.User.userAddress.slice(0, 16) + "..."
                  }`}
                  {...getOverrideProps(overrides, "@sanha38")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="7px"
              direction="column"
              width="unset"
              height="unset"
              justifycontent="center"
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
                justifycontent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={timeStamp(props.nft.Nft.createdAt)}
                {...getOverrideProps(overrides, "Mar 26, 2023 at 10:10am")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <></>
  );
}
