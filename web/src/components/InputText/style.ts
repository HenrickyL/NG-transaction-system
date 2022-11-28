import { Slot } from "@radix-ui/react-slot";
import { THEME } from "../../Utils/Theme";
import styled from "styled-components";

interface inputRootProp{
  border?: string
  alert?: 'error' | 'warn' | 'info' | 'success' | 'other'
  shadow?: boolean
}
export const InputRootSty = styled.label<inputRootProp>`
  display: flex; 
  align-items: center; 
  padding: 1rem 0.75rem;
  width: 100%; 
  height: 3rem; 
  border-radius: 2rem; 
  gap: 0.75rem;
  cursor: pointer;
  border: 2px solid ${p=>p.alert? THEME.colors.system[p.alert]: 
  p.border? p.border : 'transparent'} ;
  box-shadow:  ${p=>p.shadow? THEME.boxShadow: 'transparent'};
  transition: 0.4s;
  filter: brightness(0.9);
  &:hover{
    border: 2px solid rgba(100,100,100,0.2);
    filter: brightness(1);
  }
  &:focus-within{
    border: 2px solid rgba(0,0,0,0.7);
    background-color: white;
    filter: brightness(1);
  }
`

interface InputIconStyProps{
  color?: string
}

export const InputIconSty = styled(Slot)<InputIconStyProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  & div *{
    color: ${p=>p.color || THEME.colors.gray[400]}; 
    width: 1.5rem; 
    height: 1.5rem; 
  }
  
`

interface InputStyProps{
  color?: string
}
export const InputSty = styled.input<InputStyProps>`
  background-color: transparent; 
  color: ${ p=> p.color || THEME.colors.gray[400] }; 
  font-size: 0.9rem;
  line-height: 1rem;
  width: inherit;
  &:focus{
    color: black;
  }
  ::placeholder {
       color: ${THEME.colors.gray[200]};
   }
`