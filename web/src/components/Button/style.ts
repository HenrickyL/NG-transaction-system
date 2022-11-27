import styled from "styled-components";
import { THEME } from './../../Utils/Theme';

interface BtStyProp{
  drop?: boolean
  color?: string
}

export const BtSty = styled.button<BtStyProp>`
  position: relative ;
	padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  border-radius: 0.25rem; /* 4px */
  font-weight: 600;
  font-size: ${THEME.fontsize.sm};
  width: 100%;
  cursor: pointer;
  transition: 0.4s; 
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  ${
    p=>p.drop? `
      background: ${p.color? p.color : 'transparent'};
      width: 70%;
      box-shadow: ${THEME.boxShadow} ;
      border-radius: 2rem;
      color: white;
      font-weight: bold;
      
      `: 'background-color: ${THEME.colors.primary[500]};'
    }
  &::before{
    content: '';
    position: absolute;
    top: 8px;
    left: 45%;
    transform: translateX(-50%);
    width: 65%;
    height: 5px;
    background-color: rgb(255,255,255,0.5);
    filter: blur(1px);
  }

  &:hover{
    ${
      p=>p.drop? `
        background: ${THEME.colors.primary[500]};
      `: 'background-color: ${THEME.colors.primary[300]};'
      
    }
    border: 2px solid rgb(100,100,100,0.5);
    &::before{
      transition: 0.5s; 
      content: '';
      position: absolute;
      top: 9px;
      left: 43%;
    }
  }
  &:focus{
    border: 2px solid rgb(0,0,0,0.7);
  }
  &:active{
    transition: 0.2s; 
    width: 65%;
  }
`
