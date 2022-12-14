import styled,{keyframes} from 'styled-components'

const lightAnimation = keyframes`
   0%{
    top: 18%;
    left: 22%;
   }
   55%{
    top: 20%;
    left: 20%;
   }

   100%{
    top: 18%;
    left: 22%;
   }
`
const lightAnimation2 = keyframes`
   0%{
    top: 26%;
    left: 32%;
   }
   55%{
    top: 24%;
    left: 30%;
   }

   100%{
    top: 26%;
    left: 32%;
   }
`

const deformAnimation = (rgba?: string, isDefault:boolean = true)=>keyframes`
  0%{
    border-radius: ${isDefault?'52% 48% 33% 67% / 38% 45% 55% 62% ': 
    '41% 59% 58% 42% / 54% 58% 42% 46%' };
  }
  
  50%{
    /* border-radius: 41% 59% 58% 42% / 54% 58% 42% 46%    ; */
    border-radius: ${isDefault?'41% 59% 58% 42% / 54% 58% 42% 46%'
    :'52% 48% 33% 67% / 38% 45% 55% 62% '
     };
  }

  

  100%{
    border-radius: ${isDefault?'52% 48% 33% 67% / 38% 45% 55% 62% ': 
    '41% 59% 58% 42% / 54% 58% 42% 46%' };
  }
`


interface DropProp{
  reverse?: boolean
  color?: string,
  coloRgbaLight?:string
  time?: string
  light?: 'l' | 'm' | 'r'
  size?: 'sm' | 'md' | 'lg' | 'Lg'
  main?: boolean
}

export const Drop = styled.div<DropProp>`
  background-color: ${p=>p.color || 'transparent'};
  display: flex;
  flex-direction: column;
  position: relative;
  ${p=>p.size ? 
    p.size === 'sm'?
      `width:10rem;
      height:10rem;`:
    p.size === 'md'?
      `width:15rem;
      height:15rem;`:
    p.size === 'lg'?
      `width:25rem;
      height:25rem;`:
    `width:30rem;
    height:30rem;`
  : 
  `width:30rem;
  height:30rem;`}
  max-height: 30rem;
  max-width: 30rem;
  min-height: 10rem;
  min-width: 10rem;
  box-shadow: inset 25px 25px 20px rgba(0,0,0,0.1),
                    25px 35px 20px rgba(0,0,0,0.05),
                    25px 30px 30px rgba(0,0,0,0.05),
              inset -20px -20px 25px ${p=>p.coloRgbaLight || 'rgba(255,255,255,0.9)'};
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius:52% 48% 33% 67% / 38% 45% 55% 62% ; */
  border-radius: ${p=>p.reverse?'41% 59% 58% 42% / 54% 58% 42% 46%':
    '52% 48% 33% 67% / 38% 45% 55% 62% ' };
  animation-name: ${p=>deformAnimation(p.coloRgbaLight,!p.reverse)};
  animation-duration: ${p=>p.time || '6s'};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  filter: blur(0.5px);

  
  &:hover, &:focus{
    &::before{
      top: 18%;
      left: 22%;
    }
    &::after{
      content: '';
      top: 27%;
      left: 31%;
    }
    filter: blur(0) contrast(1);

    box-shadow: inset 30px 30px 20px rgba(0,0,0,0.18),
                    25px 35px 20px rgba(0,0,0,0.15),
                    25px 30px 30px rgba(0,0,0,0.15),
              inset -20px -20px 25px ${p=>p.coloRgbaLight || 'rgba(255,255,255,0.9)'};
    ${p=>p.main?``:`
      transition: 0.5s;
      border-radius: 50%;
      animation: none;
    `}
  }
  
  
  &::before{
    content: '';
    position: absolute;
    top: 15%;
    left: 25%;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.7);
    opacity: 0.9;
    transition: 0.3s;
    animation-name: ${lightAnimation};
    animation-duration: ${p=>p.time || '5s'};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    box-shadow:  -8px -5px 12px rgba(255,255,255,0.7);;
    filter: blur(2px);

  }
  &::after{
    content: '';
    position: absolute;
    top: 26%;
    left: 32%;
    width: 0.95rem;
    height: 0.95rem;
    border-radius: 50%;
    background-color: ${p=>p.coloRgbaLight || '#fcfcfc'};
    opacity: 0.7;
    transition: 0.3s;
    animation-name: ${lightAnimation2};
    animation-duration: ${p=>p.time || '6s'};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    filter: blur(4px);
  }
`



export const AuthorizationSty = styled.nav`
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center ;
  gap: 1rem;
  
`