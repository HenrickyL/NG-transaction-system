import React, { ButtonHTMLAttributes, ReactNode } from "react";
import {Slot} from '@radix-ui/react-slot'
import { BtSty } from "./style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChield?:  boolean;
    className?: string;
}

export function Button({children, asChield, className, ...rest}: ButtonProps){
    const Comp = asChield ? Slot: BtSty
    return(
        <Comp
        {...rest}
        >

            {children}
        </Comp>
    )
}