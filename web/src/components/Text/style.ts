import styled from "styled-components";
import { THEME } from "../../Utils/Theme";


interface TextStyProps{
  size:     'xs' |'sm' |'md'
  isBold?:  boolean;
  color?:   string;
}
export const TextSty = styled.span<TextStyProps>`
  font-family: ${THEME.fonts.sans};
  font-size: ${p=>THEME.fontsize[p.size]};
  font-weight:  ${p=> p.isBold? 'bold': '400'};
  color: ${p=>p.color || 'black'};
`