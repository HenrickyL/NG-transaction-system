import { Slot } from "@radix-ui/react-slot";
import { THEME } from "../../Utils/Theme";
import styled from "styled-components";
export const InputRootSty = styled.div`
  display: flex; 
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  padding-top: 1rem;
  padding-bottom: 1rem; 
  align-items: center; 
  width: 100%; 
  height: 3rem; 
  border-radius: 0.25rem; 
  gap: 0.75rem; 
`

interface InputIconStyProps{
  color?: string
}

export const InputIconSty = styled(Slot)<InputIconStyProps>`
  color: ${p=>p.color || THEME.colors.gray[400]}; 
  width: 1.5rem; 
  height: 1.5rem; 
`

interface InputStyProps{
  color?: string
}
export const InputSty = styled.input<InputStyProps>`
  background-color: transparent; 
  color: ${ p=> p.color || THEME.colors.gray[400] }; 
  font-size: 0.75rem;
  line-height: 1rem; 
  flex: 1 1 0%; 
  outline: 0; 
`