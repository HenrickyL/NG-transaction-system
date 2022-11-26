import styled from "styled-components";



interface FieldGroupStyProps{
  gap?: number
  flex1?: boolean
}
export const FieldGroupSty = styled.div<FieldGroupStyProps>`
  ${p=>p.flex1? 'display:flex; flex: 1;': 'display: grid;' }
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  gap: ${p=> p.gap? `${p.gap* 0.25}rem` :'0.5rem'}; 
  align-items: center;
`