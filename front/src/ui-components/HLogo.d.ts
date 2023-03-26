/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HLogoOverridesProps = {
    HLogo?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HLogoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HLogoOverridesProps | undefined | null;
}>;
export default function HLogo(props: HLogoProps): React.ReactElement;
