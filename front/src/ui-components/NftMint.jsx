/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Icon,
  Image,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLoadingThunk } from "../modules/isLoading.js";
export default function NftMint(props) {
  const inputRef = React.useRef();
  const account = useSelector((state) => state.account.account.account);
  const isLoading = useSelector((state) => state.isLoading.isLoading);
  const [NFTName, setNFTName] = React.useState("");
  const [NFTDescription, setNFTDescription] = React.useState("");
  const [file, setFile] = React.useState();
  const [img, setImg] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const cookie = document.cookie.split(";");
    let isTrue = false;
    for (let i in cookie) {
      if (document.cookie) {
        isTrue = true;
        navigate("/mint");
        return;
      }
    }
    if (!isTrue) {
      navigate("/");
      alert("로그인이 필요합니다.");
    }
  }, []);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const { overrides, ...rest } = props;

  const nameInput = (e) => {
    setNFTName(e.currentTarget.value);
  };

  const descriptionInput = (e) => {
    setNFTDescription(e.currentTarget.value);
  };

  const fileChange = (e) => {
    let selectedIMG = document.querySelector(".imgFile");
    if (selectedIMG.files && selectedIMG.files.length > 0) {
      setFile(selectedIMG.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(selectedIMG.files[0]);
      reader.onload = () => {
        if (reader.result) {
          setImg(reader.result);
          document.querySelector(
            ".fileBackground"
          ).style.backgroundRepeat = `no-repeat`;
          document.querySelector(".fileBackground").style.backgroundSize =
            "contain";
          document.querySelector(".fileBackground").style.backgroundPosition =
            "center";
        }
      };
    }
  };

  const mint = async () => {
    if (!NFTName || !NFTDescription || !file) {
      alert("빠짐없이 작성하십시오");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", NFTName);
    formData.append("description", NFTDescription);
    formData.append("from", account);
    dispatch(isLoadingThunk({ isLoading: true }));
    const result = (await axios.post("/api/mint/mint", formData)).data;
    console.log(result);
    try {
      // console.log("jaksfdlksedhfklashfkljshaf", formData);
      await props.web3.eth.sendTransaction(result);
      // console.log(test);
      result.account = account;

      await axios.post("/api/mint/mintComplete", result);
      dispatch(isLoadingThunk({ isLoading: false }));
      navigate(`/`);
    } catch (error) {
      console.log("에러");
      dispatch(isLoadingThunk({ isLoading: false }));
    }
  };
  return (
    <View
      width="464px"
      height="841px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifycontent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NftMint")}
      {...rest}
    >
      <Image
        src="https://f8n-production-collection-assets.imgix.net/0x842F04ac9f1843bA8600995E77814e34643d1c9B/5/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "nft (5) 4")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="464px"
        height="841px"
        justifycontent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 71")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 69")}
        >
          <Text
            fontFamily="Inter"
            fontSize="35px"
            fontWeight="800"
            color="rgba(255,255,255,0.7)"
            lineHeight="42.35795211791992px"
            textAlign="center"
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
            children="Create New Item"
            {...getOverrideProps(overrides, "Create New Item")}
          ></Text>
        </Flex>
        <Flex
          gap="3px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 68")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(255,255,255,0.7)"
            lineHeight="21px"
            textAlign="center"
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
            children="* Required fields"
            {...getOverrideProps(overrides, "* Required fields")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(255,255,255,0.7)"
            lineHeight="21px"
            textAlign="center"
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
            children="Image, Video, Audio, or 3D Model"
            {...getOverrideProps(overrides, "Image, Video, Audio, or 3D Model")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="9px"
            fontWeight="500"
            color="rgba(147,147,147,1)"
            lineHeight="21px"
            textAlign="center"
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
            children="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB"
            {...getOverrideProps(
              overrides,
              "File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image 1")}
        >
          <ImgFile
            type="file"
            accept="image/*"
            required
            className="imgFile"
            ref={inputRef}
            onChange={() => {
              fileChange();
            }}
          />
          <Flex
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            gap="10px"
            direction="column"
            width="300px"
            height="200px"
            justifycontent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            border="1px dashed rgba(255,255,255,0.7)"
            borderRadius="15px"
            padding="71px 119px 71px 119px"
            {...getOverrideProps(overrides, "Frame 67")}
            className="fileBackground"
            onClick={() => {
              document.querySelector(".imgFile").click();
            }}
            backgroundImage={`url(${img}) `}
          >
            <Icon
              width="48px"
              height="42px"
              viewBox={{ minX: 0, minY: 0, width: 48, height: 42 }}
              paths={[
                {
                  d: "M42 4.5C42.825 4.5 43.5 5.175 43.5 6L43.5 35.9812L43.0312 35.3719L30.2812 18.8719C29.8594 18.3188 29.1938 18 28.5 18C27.8062 18 27.15 18.3188 26.7188 18.8719L18.9375 28.9406L16.0781 24.9375C15.6562 24.3469 14.9812 24 14.25 24C13.5188 24 12.8438 24.3469 12.4219 24.9469L4.92188 35.4469L4.5 36.0281L4.5 36L4.5 6C4.5 5.175 5.175 4.5 6 4.5L42 4.5ZM6 0C2.69063 0 0 2.69063 0 6L0 36C0 39.3094 2.69063 42 6 42L42 42C45.3094 42 48 39.3094 48 36L48 6C48 2.69063 45.3094 0 42 0L6 0ZM13.5 18C14.0909 18 14.6761 17.8836 15.2221 17.6575C15.768 17.4313 16.2641 17.0998 16.682 16.682C17.0998 16.2641 17.4313 15.768 17.6575 15.2221C17.8836 14.6761 18 14.0909 18 13.5C18 12.9091 17.8836 12.3239 17.6575 11.7779C17.4313 11.232 17.0998 10.7359 16.682 10.318C16.2641 9.90016 15.768 9.56869 15.2221 9.34254C14.6761 9.1164 14.0909 9 13.5 9C12.9091 9 12.3239 9.1164 11.7779 9.34254C11.232 9.56869 10.7359 9.90016 10.318 10.318C9.90016 10.7359 9.56869 11.232 9.34254 11.7779C9.1164 12.3239 9 12.9091 9 13.5C9 14.0909 9.1164 14.6761 9.34254 15.2221C9.56869 15.768 9.90016 16.2641 10.318 16.682C10.7359 17.0998 11.232 17.4313 11.7779 17.6575C12.3239 17.8836 12.9091 18 13.5 18Z",
                  fill: "rgba(255,255,255,0.7)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifycontent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
        <Flex
          gap="11px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 73")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(255,255,255,0.7)"
            lineHeight="21px"
            textAlign="center"
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
            children="* NFT Name"
            {...getOverrideProps(overrides, "* User Name")}
          ></Text>
          <TextField
            width="300px"
            height="unset"
            placeholder="NFT Name"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField37832848")}
            onInput={(e) => {
              nameInput(e);
            }}
          ></TextField>
        </Flex>
        <MarginStyle />
        {/* <Flex
          gap="11px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 74")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(255,255,255,0.7)"
            lineHeight="21px"
            textAlign="center"
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
            children="* User link"
            {...getOverrideProps(overrides, "* User link")}
          ></Text>
          <TextField
            width="300px"
            height="unset"
            placeholder="User link"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField37832857")}
          ></TextField>
        </Flex> */}
        <Flex
          gap="11px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 75")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(255,255,255,0.7)"
            lineHeight="21px"
            textAlign="center"
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
            children="* NFT Description"
            {...getOverrideProps(overrides, "* Description")}
          ></Text>
          <TextField
            width="300px"
            height="unset"
            placeholder="Description"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField37832866")}
            onInput={(e) => {
              descriptionInput(e);
            }}
          ></TextField>
        </Flex>
        <MarginStyle />
        {/* <Flex
          gap="11px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 76")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="500"
            color="rgba(255,255,255,0.7)"
            lineHeight="21px"
            textAlign="center"
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
            children="* Blockchain"
            {...getOverrideProps(overrides, "* Blockchain")}
          ></Text>
          <SelectField
            width="300px"
            height="unset"
            placeholder="Blockchain"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
        </Flex> */}
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifycontent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 183px 10px 183px"
          {...getOverrideProps(overrides, "Frame 72")}
        >
          <Button
            width="unset"
            height="unset"
            borderRadius="35px"
            overflow="hidden"
            shrink="0"
            backgroundColor="rgba(12,12,12,1)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Create"
            {...getOverrideProps(overrides, "Button")}
            onClick={() => {
              mint();
            }}
          ></Button>
        </Flex>
      </Flex>
    </View>
  );
}

const ImgFile = styled.input`
  display: none;
`;

const MarginStyle = styled.div`
  margin-top: 30px;
`;
