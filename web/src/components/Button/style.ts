import styled from "styled-components";
import { THEME } from './../../Utils/Theme';



export const BtSty = styled.button`
  background-color: ${THEME.colors.primary[500]};
	padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  border-radius: 0.25rem; /* 4px */
  font-weight: 600;
  font-size: ${THEME.fontsize.sm};
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s; 
  border-color: rgb(255,255,255,0.5) ;

  &:hover{
    background-color: ${THEME.colors.primary[300]};
  }
  &:focus{
    right: 0.5rem;
  }
`
//py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full 
//transition-colors hover:bg-cyan-300 focus:right-2 ring-white