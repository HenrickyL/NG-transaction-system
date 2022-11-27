import { FieldGroup,InputText, Heading,Button, Field } from "../../../components"
import { LoginFormSty, LoginSty } from "./style"
import {Lock} from 'phosphor-react/dist'
import { useDrop } from "..";
import { useEffect } from 'react';
import { THEME } from './../../../Utils/Theme';
import { VARIABLES } from "../../../Utils/Variables";




export const Login = ()=>{
  const { setClick , setAnotherLink, click, setOtherTab} = useDrop()

  useEffect(()=>{
    setAnotherLink({
      to: VARIABLES.urls.signIn,
      title: 'Sign In',
      color: THEME.colors.secondary[400]
    })
    setOtherTab(true)
  },[])

  const handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    setClick(!click)
  }
  return(
    <LoginSty >
      <Heading font='poppins' size="Lg">Login</Heading>
      <LoginFormSty>

        <FieldGroup>
          <label htmlFor='username'>
            <Heading size="sm">Username:</Heading>
          </label>
          
          <InputText.Root shadow>
            <InputText.Input id='username' placeholder="JohnDee"/>
          </InputText.Root>
        </FieldGroup>

        <FieldGroup >
          <label htmlFor='password'>
            <Heading size="sm">Password:</Heading>
          </label>

          <InputText.Root shadow>
            <InputText.Icon>
              <Lock />
            </InputText.Icon>
            <InputText.Input id='password' placeholder="**********" type='password'/>
          </InputText.Root>
        </FieldGroup>
          <Button drop color={THEME.colors.primary[400]} onClick={(e)=>{handleClick(e)}}>Logar</Button>
      </LoginFormSty>

    </LoginSty>
  )
}
