import { Slot } from "@radix-ui/react-slot";
import { THEME } from "../../Utils/Theme";
import styled from "styled-components";

interface inputRootProp{
  border?: string
  alert?: 'error' | 'warn' | 'info' | 'success' | 'other'
  shadow?: boolean
}
export const InputRootSty = styled.div<inputRootProp>`
  display: flex; 
  align-items: center; 
  padding: 1rem 0.75rem;
  width: 100%; 
  height: 3rem; 
  border-radius: 0.5rem; 
  gap: 0.75rem; 
  border: 2px solid ${p=>p.alert? THEME.colors.system[p.alert]: 
  p.border? p.border : 'transparent'} ;
  /* ${p=> p.border? `border: 2px solid ${p.border}`: ''} */
  /* ${p=> p.alert?  `border: 2px solid ${THEME.colors.system[p.alert]}`: ''} */
  box-shadow:  ${p=>p.shadow? THEME.boxShadow: 'transparent'};
  transition: 0.3s;
  &:hover{
    border: 2px solid rgba(100,100,100,0.2);
  }
  &:focus-within{
    border: 2px solid rgba(0,0,0,0.7);
  }
`

interface InputIconStyProps{
  color?: string
}

export const InputIconSty = styled(Slot)<InputIconStyProps>`
  display: flex;
  width: 100%;
  height: 100%;
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
  outline: 0; 
  ::placeholder {
       color: ${THEME.colors.gray[200]};
   }
`