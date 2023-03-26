/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NftMintOverridesProps = {
    NftMint?: PrimitiveOverrideProps<ViewProps>;
    "nft (5) 4"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 71"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 69"?: PrimitiveOverrideProps<FlexProps>;
    "Create New Item"?: PrimitiveOverrideProps<TextProps>;
    "Frame 68"?: PrimitiveOverrideProps<FlexProps>;
    "* Required fields"?: PrimitiveOverrideProps<TextProps>;
    "Image, Video, Audio, or 3D Model"?: PrimitiveOverrideProps<TextProps>;
    "File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB"?: PrimitiveOverrideProps<TextProps>;
    "image 1"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 67"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 73"?: PrimitiveOverrideProps<FlexProps>;
    "* User Name"?: PrimitiveOverrideProps<TextProps>;
    TextField37832848?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 74"?: PrimitiveOverrideProps<FlexProps>;
    "* User link"?: PrimitiveOverrideProps<TextProps>;
    TextField37832857?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 75"?: PrimitiveOverrideProps<FlexProps>;
    "* Description"?: PrimitiveOverrideProps<TextProps>;
    TextField37832866?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 76"?: PrimitiveOverrideProps<FlexProps>;
    "* Blockchain"?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 72"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NftMintProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NftMintOverridesProps | undefined | null;
}>;
export default function NftMint(props: NftMintProps): React.ReactElement;
