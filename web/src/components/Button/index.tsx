import React, { ButtonHTMLAttributes, ReactNode } from "react";
import {Slot} from '@radix-ui/react-slot'
import { BtSty } from "./style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChields?:  boolean;
    drop?: boolean
    color?: string
}

export function Button({children, asChields, drop, color, ...rest}: ButtonProps){
    const Comp = asChields ? Slot: BtSty
    return(
        <Comp
        {...rest} drop={drop}  color={color}
        >
            {children}
        </Comp>
    )
}