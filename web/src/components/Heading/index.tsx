import { Slot } from "@radix-ui/react-slot";
import React, { ReactNode } from "react";
import { HeadingSty } from "./style";

export interface HeadingProps{
    size? : 'sm' | 'md' | 'lg' | 'Lg' | 'LG'
    children: ReactNode;
    color?:  string;
    font?: 'inter' | 'poppins'

}

export function Heading({size,children, color, font}: HeadingProps){
    function map(s?:'sm' | 'md' | 'lg' | 'Lg' | 'LG'){
        switch (s) {
            case 'sm':
                return 'lg'
            case 'md':
                return 'xl'
            case 'lg':
                return '2xl'
            case 'Lg':
                return '3xl'
            case 'LG':
                return '4xl'
            default:
                return 'xl'
        }
    }
    return(
        <HeadingSty size={map(size)}  color={color} font={font}> 
            {children}
        </HeadingSty>
    )
}