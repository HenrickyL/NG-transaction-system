import React, { ButtonHTMLAttributes, ReactNode } from "react";
import {Slot} from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChield?:  boolean;
    className?: string;
}

export function Button({children, asChield, className, ...rest}: ButtonProps){
    const Comp = asChield ? Slot: 'button'
    return(
        <Comp className={clsx(
            `py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full 
                transition-colors hover:bg-cyan-300 focus:right-2 ring-white`,
            {
                
            },
            className
        ) }
        {...rest}
        >
            {children}
        </Comp>
    )
}