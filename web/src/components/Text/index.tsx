import React, { ReactNode } from "react";
import { TextSty } from "./style";

export interface TextProps{
    size? : 'sm' | 'md' | 'lg'
    children: ReactNode;
    isBold?:  boolean;
    color?:  string;
}

export function Text({size,children, isBold, color}: TextProps){
    function map(s?:'sm' | 'md' | 'lg'){
        switch (s) {
            case 'sm':
                return 'xs'
            case 'md':
                return 'sm'
            case 'lg':
                return 'md'
            default:
                return 'sm'
        }
    }
    return(
        <TextSty size={map(size)} isBold={isBold} color={color}>
            {children}
        </TextSty>
    )
}