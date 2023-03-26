/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame123OverridesProps = {
    Frame123?: PrimitiveOverrideProps<ViewProps>;
    Button36472694?: PrimitiveOverrideProps<ButtonProps>;
    TextField36472699?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36472706?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36472713?: PrimitiveOverrideProps<TextFieldProps>;
    Button36472720?: PrimitiveOverrideProps<ButtonProps>;
    Button36472724?: PrimitiveOverrideProps<ButtonProps>;
    "'PUW(U( 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Frame123Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame123OverridesProps | undefined | null;
}>;
export default function Frame123(props: Frame123Props): React.ReactElement;
