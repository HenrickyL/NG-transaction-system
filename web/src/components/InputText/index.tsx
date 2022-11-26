import React, { InputHTMLAttributes, ReactNode } from "react";
import { InputIconSty, InputRootSty, InputSty } from "./style";

export interface InputTextRootProps{
    children: ReactNode
}

const InputTextRoot = ( {children}: InputTextRootProps)=>{
    return (
        <InputRootSty > 
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
            {children}
        </InputIconSty>
    )
}

InputTextIcon.displayName = "TextInput.Icon"

export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement>{}
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