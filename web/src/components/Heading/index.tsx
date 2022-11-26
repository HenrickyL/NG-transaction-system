import { Slot } from "@radix-ui/react-slot";
import React, { ReactNode } from "react";
import { HeadingSty } from "./style";

export interface HeadingProps{
    size? : 'sm' | 'md' | 'lg'
    children: ReactNode;
    isBold?:  boolean;
    color?:  string;
}

export function Heading({size,children, isBold, color}: HeadingProps){
    function map(s?:'sm' | 'md' | 'lg'){
        switch (s) {
            case 'sm':
                return 'lg'
            case 'md':
                return 'xl'
            case 'lg':
                return '2xl'
            default:
                return 'xl'
        }
    }
    return(
        <HeadingSty size={map(size)} isBold={isBold} color={color}>
            {children}
        </HeadingSty>
    )
}