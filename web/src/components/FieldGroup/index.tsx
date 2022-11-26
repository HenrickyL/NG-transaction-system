import { InputHTMLAttributes } from "react";
import { FieldGroupSty } from "./style";

interface FieldGroupProps extends InputHTMLAttributes<HTMLDivElement>{
  children?:
  | React.ReactNode
  | React.ReactNode[];
  gap?: number
  flex1?: boolean
}
export const FieldGroup =({children, gap, flex1, ...rest}:FieldGroupProps)=>{

  return(
    <FieldGroupSty {...rest} gap={gap} flex1={flex1}>
      {children}
    </FieldGroupSty>
  )
}