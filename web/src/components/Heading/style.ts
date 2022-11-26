import styled from "styled-components";
import { THEME } from "../../Utils/Theme";

interface HeadingStyProps{
  size:  "lg" | "xl" | "2xl" | '3xl' |'4xl'
  color?:   string;
  font?: 'inter' | 'poppins'
}

export const HeadingSty = styled.h2<HeadingStyProps>`
  font-family: ${p=> p.font ? THEME.fonts[p.font] : 'Inter, sans-serif'};
  font-size: ${p=>THEME.fontsize[p.size]};
  font-weight: 'bold';
  color: ${p=>p.color || 'black'};
`