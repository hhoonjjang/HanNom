/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { HLogoProps } from "./HLogo";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AfterHeaderOverridesProps = {
    AfterHeader?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<IconProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    HLogo?: HLogoProps;
    Feed?: PrimitiveOverrideProps<TextProps>;
    Explore?: PrimitiveOverrideProps<TextProps>;
    "Frame 36"?: PrimitiveOverrideProps<FlexProps>;
    Button37663076?: PrimitiveOverrideProps<ButtonProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    Button37663159?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AfterHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AfterHeaderOverridesProps | undefined | null;
}>;
export default function AfterHeader(props: AfterHeaderProps): React.ReactElement;
