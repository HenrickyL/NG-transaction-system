import { InputHTMLAttributes } from "react"
import { FieldSty } from "./style"


interface FieldProps extends InputHTMLAttributes<HTMLDivElement>{
  children?:
    | React.ReactNode
    | React.ReactNode[];
    gap?: number 
    flex1?: boolean
}
export const Field = ({children, gap, flex1, ...rest}:FieldProps)=>{

  return(
    <FieldSty {...rest} gap={gap} flex1={flex1}>
      {children}
    </FieldSty>
  )
}