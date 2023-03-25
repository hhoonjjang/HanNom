/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NFTCreate2OverridesProps = {
    NFTCreate2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
    Dust?: PrimitiveOverrideProps<ImageProps>;
    "Frame 62"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 57"?: PrimitiveOverrideProps<FlexProps>;
    "Mint an NFT"?: PrimitiveOverrideProps<TextProps>;
    "To mint an NFT, you firt need to deploy a smart contract."?: PrimitiveOverrideProps<TextProps>;
    "Frame 60"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 59"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 58"?: PrimitiveOverrideProps<FlexProps>;
    "ERC-721"?: PrimitiveOverrideProps<TextProps>;
    "Frame 61"?: PrimitiveOverrideProps<FlexProps>;
    "Foundation contracts allow you to deploy best-in-class smart contracts that you own and can use across all of web3."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NFTCreate2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NFTCreate2OverridesProps | undefined | null;
}>;
export default function NFTCreate2(props: NFTCreate2Props): React.ReactElement;
