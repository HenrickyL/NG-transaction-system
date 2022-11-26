import styled from "styled-components";
import { THEME } from "../../Utils/Theme";

interface HeadingStyProps{
  size:  "lg" | "xl" | "2xl"
  isBold?: boolean
  color?:   string;
}

export const HeadingSty = styled.h2<HeadingStyProps>`
  font-family: ${THEME.fonts.sans};
  font-size: ${p=>THEME.fontsize[p.size]};
  font-weight: 'bold';
  color: ${p=>p.color || 'black'};
`