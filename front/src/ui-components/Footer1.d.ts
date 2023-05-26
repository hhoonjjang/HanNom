/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HLogoProps } from "./HLogo";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Footer1OverridesProps = {
    Footer1?: PrimitiveOverrideProps<ViewProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    HLogo?: HLogoProps;
    "Frame 43"?: PrimitiveOverrideProps<FlexProps>;
    "Privacy Policy"?: PrimitiveOverrideProps<TextProps>;
    "Terms of Service"?: PrimitiveOverrideProps<TextProps>;
    "Frame 42"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 39"?: PrimitiveOverrideProps<FlexProps>;
    Lean?: PrimitiveOverrideProps<TextProps>;
    "Frame 44"?: PrimitiveOverrideProps<FlexProps>;
    Create?: PrimitiveOverrideProps<TextProps>;
    Collect?: PrimitiveOverrideProps<TextProps>;
    Sell?: PrimitiveOverrideProps<TextProps>;
    "Frame 40"?: PrimitiveOverrideProps<FlexProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    "Frame 45"?: PrimitiveOverrideProps<FlexProps>;
    Careers?: PrimitiveOverrideProps<TextProps>;
    "Help Center"?: PrimitiveOverrideProps<TextProps>;
    Subscribe?: PrimitiveOverrideProps<TextProps>;
    "Frame 41"?: PrimitiveOverrideProps<FlexProps>;
    Connet?: PrimitiveOverrideProps<TextProps>;
    "Frame 46"?: PrimitiveOverrideProps<FlexProps>;
    Twiiter?: PrimitiveOverrideProps<TextProps>;
    Instargram?: PrimitiveOverrideProps<TextProps>;
    Blog?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Footer1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Footer1OverridesProps | undefined | null;
}>;
export default function Footer1(props: Footer1Props): React.ReactElement;
