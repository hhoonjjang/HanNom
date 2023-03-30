/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import axios from "axios";
import { useSelector } from "react-redux";
export default function Activity(props) {
  const [history, setHistory] = React.useState();
  const account = useSelector((state) => state.account.account.account);
  console.log(account);
  const loadHistory = async () => {
    const data = (
      await axios.post("http://localhost:8080/api/mint/tradeList", {
        address: account,
      })
    ).data;

    console.log("data발싸", data);
    setHistory(data);
  };
  React.useEffect(() => {
    if (!account) return;
    loadHistory();
  }, [account]);

  const dateChangeMethod = (date) => {
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    switch (month) {
      case "01":
        return "Jan " + day;
      case "02":
        return "Feb " + day;
      case "03":
        return "Mar " + day;
      case "04":
        return "Apr " + day;
      case "05":
        return "May " + day;
      case "06":
        return "Jun " + day;
      case "07":
        return "Jul " + day;
      case "08":
        return "Aug " + day;
      case "09":
        return "Sep " + day;
      case "10":
        return "Oct " + day;
      case "11":
        return "Nov " + day;
      case "12":
        return "Dec " + day;
      default:
        return undefined;
    }
  };

  const typeDivision = (index) => {
    if (account == history.list[index].buyerAddress) {
      return "⬅️ purchase";
    } else return "➡️ sale";
  };
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="column"
      width="1008px"
      height="395px"
      justifycontent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Activity")}
      {...rest}
    >
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifycontent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 151")}
      >
        <Flex
          gap="9px"
          direction="row"
          width="978px"
          height="unset"
          justifycontent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 83")}
        >
          <Flex
            gap="46px"
            direction="row"
            width="unset"
            height="unset"
            justifycontent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 12438242825")}
          >
            <Flex
              gap="5px"
              direction="row"
              width="110px"
              height="unset"
              justifycontent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 12738242874")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="21px"
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
                children="Type"
                {...getOverrideProps(overrides, "Type")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="189px"
              height="unset"
              justifycontent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 12338242826")}
            >
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="57px"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 8238242828")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="18px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifycontent="unset"
                  width="150px"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Title"
                  {...getOverrideProps(overrides, "Title")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="168px"
              height="unset"
              justifycontent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 12538242863")}
            >
              <Flex
                gap="0"
                direction="column"
                width="111px"
                height="56px"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 8238242865")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="21px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifycontent="unset"
                  width="111px"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="From"
                  {...getOverrideProps(overrides, "From")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="130px"
              height="unset"
              justifycontent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 12838242875")}
            >
              <Flex
                gap="0"
                direction="column"
                width="111px"
                height="56px"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 8238242877")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="21px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifycontent="unset"
                  width="111px"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="To"
                  {...getOverrideProps(overrides, "To")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifycontent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 12938242879")}
            >
              <Flex
                gap="0"
                direction="column"
                width="75px"
                height="56px"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 8238242881")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="21px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifycontent="unset"
                  width="75px"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Price"
                  {...getOverrideProps(overrides, "Price")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="75px"
              height="unset"
              justifycontent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 13038242883")}
            >
              <Flex
                gap="0"
                direction="column"
                width="111px"
                height="56px"
                justifycontent="center"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 8238242884")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="21px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifycontent="unset"
                  width="75px"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Time"
                  {...getOverrideProps(overrides, "Time")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* 이 아래가 리스트 */}

        {history?.list?.map((item, index) => (
          <Flex
            key={`history-${index}`}
            gap="33px"
            direction="column"
            width="unset"
            height="unset"
            justifycontent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="15px"
            padding="17px 20px 20px 10px"
            backgroundColor="rgba(252,252,252,1)"
            {...getOverrideProps(overrides, "Frame 96")}
          >
            <Flex
              gap="9px"
              direction="row"
              width="978px"
              height="unset"
              justifycontent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 85")}
            >
              <Flex
                gap="46px"
                direction="row"
                width="unset"
                height="unset"
                justifycontent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 12438382827")}
              >
                <Flex
                  gap="5px"
                  direction="row"
                  width="110px"
                  height="unset"
                  justifycontent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="10px"
                  padding="0px 0px 0px 0px"
                  backgroundImage="linear-gradient(-90deg, rgba(255,255,255,0), rgba(228,228,228,1))"
                  {...getOverrideProps(overrides, "Frame 12738382828")}
                >
                  {/* <Icon
                    width="12px"
                    height="12px"
                    viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
                    paths={[
                      {
                        d: "M8.61533 5.56641C8.02778 5.67891 7.40273 5.48203 6.94852 4.97109L6.1547 4.07812C5.84217 3.72656 5.66716 3.25312 5.66716 2.75625L5.66716 2.47266L4.0066 1.45312C3.89617 1.38516 3.82742 1.25156 3.83367 1.10859C3.83992 0.965625 3.91492 0.839062 4.0316 0.780469L5.01502 0.288281C5.39839 0.0984375 5.813 0 6.23387 0L6.61099 0C7.37564 0 8.11112 0.328125 8.66742 0.916406L9.59667 1.90078C10.1009 2.43516 10.2884 3.20625 10.1509 3.91641L10.4801 4.28906L10.6468 4.10156C10.8426 3.88125 11.1593 3.88125 11.3531 4.10156L11.8531 4.66406C12.049 4.88438 12.049 5.24062 11.8531 5.45859L10.0196 7.52109C9.82377 7.74141 9.50707 7.74141 9.31331 7.52109L8.81326 6.95859C8.61741 6.73828 8.61741 6.38203 8.81326 6.16406L8.97995 5.97656L8.61533 5.56641ZM0.570883 8.83828L5.43589 4.27969C5.50881 4.39453 5.59215 4.50469 5.68174 4.60781L6.47556 5.50078C6.60057 5.64141 6.73392 5.76328 6.8756 5.86875L2.81066 11.3578C2.50855 11.7656 2.0606 12 1.58972 12C0.710478 12 0 11.1984 0 10.2117C0 9.68203 0.210435 9.17813 0.570883 8.83828Z",
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
                    {...getOverrideProps(overrides, "Vector38382829")}
                  ></Icon> */}
                  <Text
                    fontFamily="Inter"
                    fontSize="14px"
                    fontWeight="500"
                    color="rgba(0,0,0,1)"
                    lineHeight="21px"
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
                    children={typeDivision(index)}
                    {...getOverrideProps(overrides, "Acution")}
                  ></Text>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="189px"
                  height="unset"
                  justifycontent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 12338382831")}
                >
                  <Image
                    src={`http://localhost:8080${history?.list[index]?.Nft?.nftImg}`}
                    width="40px"
                    height="40px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifycontent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="5px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 538382832")}
                  ></Image>
                  <Flex
                    gap="0"
                    direction="column"
                    width="unset"
                    height="57px"
                    justifycontent="center"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 8238382833")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="12px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="18px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifycontent="unset"
                      width="150px"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={history?.list[index]?.Nft?.nftName}
                      {...getOverrideProps(overrides, "NFT Name #1")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifycontent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 12538382835")}
                >
                  <Image
                    src={`http://localhost:8080${history?.user[index]?.[1].profileImg}`}
                    width="30px"
                    height="30px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifycontent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 538382836")}
                  ></Image>
                  <Flex
                    gap="0"
                    direction="column"
                    width="111px"
                    height="56px"
                    justifycontent="center"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 8238382837")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="14px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="21px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifycontent="unset"
                      width="111px"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={`@${history?.user[index]?.[1].userName}`}
                      {...getOverrideProps(overrides, "@sanha3838382838")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifycontent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 12838382839")}
                >
                  <Image
                    src={`http://localhost:8080${history?.user[index]?.[0].profileImg}`}
                    width="30px"
                    height="30px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifycontent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="15px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 538382840")}
                  ></Image>
                  <Flex
                    gap="0"
                    direction="column"
                    width="111px"
                    height="56px"
                    justifycontent="center"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 8238382841")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="14px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="21px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifycontent="unset"
                      width="111px"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={`@${history?.user[index]?.[0].userName}`}
                      {...getOverrideProps(overrides, "@sanha3838382842")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifycontent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 12938382843")}
                >
                  <Flex
                    gap="0"
                    direction="column"
                    width="75px"
                    height="56px"
                    justifycontent="center"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 8238382844")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="14px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="21px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifycontent="unset"
                      width="75px"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={`${history?.list[index].price} ETH`}
                      {...getOverrideProps(overrides, "0.33ETH38382845")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="75px"
                  height="unset"
                  justifycontent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 13038382846")}
                >
                  <Flex
                    gap="0"
                    direction="column"
                    width="111px"
                    height="56px"
                    justifycontent="center"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 8238382847")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="14px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="21px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifycontent="unset"
                      width="75px"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={`${dateChangeMethod(
                        history?.list[index].createdAt
                      )}`}
                      {...getOverrideProps(overrides, "Aug 2038382848")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
