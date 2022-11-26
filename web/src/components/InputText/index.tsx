import React, { InputHTMLAttributes, ReactNode } from "react";
import { InputIconSty, InputRootSty, InputSty } from "./style";

export interface InputTextRootProps{
    children: ReactNode
    alert?: 'error' | 'warn' | 'info' | 'success' | 'other'
    border?: string
    shadow?: boolean
}

const InputTextRoot = ( {alert,children, border, shadow}: InputTextRootProps)=>{
    return (
        <InputRootSty alert={alert} border={border} shadow={shadow}> 
            {children}
        </InputRootSty>
    )
}
InputTextRoot.displayName = 'TextInput.Root'

export interface InputTextIconProps{
    children: ReactNode
}
const InputTextIcon = ({children}: InputTextIconProps)=>{
    return(
        <InputIconSty>
           <div>{children}</div>
        </InputIconSty>
    )
}
InputTextIcon.displayName = "TextInput.Icon"

export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement>{
    
}
const InputTextInput = (props: InputTextInputProps)=>{
    return(
        <InputSty {... props}/>
    )
}
InputTextInput.displayName = "TextInput.Input"


export const InputText ={
    Root: InputTextRoot,
    Input: InputTextInput,
    Icon: InputTextIcon
}