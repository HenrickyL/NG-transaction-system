import styled from "styled-components";


interface FieldStyProps{
  gap?: number 
  flex1?: boolean
}
export const FieldSty = styled.div<FieldStyProps>`
  display: flex; 
  flex-direction: column;
  ${p=>p.flex1? 'flex: 1 ;': ''} 
  
  gap: ${p=> p.gap? `${0.25*p.gap}rem`:'0.5rem'}; 
`