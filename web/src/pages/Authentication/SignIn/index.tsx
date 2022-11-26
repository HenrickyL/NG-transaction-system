import { FieldGroup,InputText, Heading,Button, Field } from "../../../components"
import { SignInFormSty, SignInSty } from "./style"
import {Lock} from 'phosphor-react/dist'
import { useDrop } from "..";
import { useEffect } from 'react';
import { THEME } from './../../../Utils/Theme';



export const SignIn = ()=>{
  const { setClick , setAnotherLink, click, setOtherTab} = useDrop()

  useEffect(()=>{
    setAnotherLink({
      to: 'login',
      title: 'Login',
      color: THEME.colors.primary[400]
    })
    setOtherTab(true)
  },[])

  const handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    setClick(!click)
  }
  return(
    <SignInSty >
      <Heading size="Lg">Sign In</Heading>
      <SignInFormSty>

        <FieldGroup>
          <Heading size="sm">Username</Heading>
          <InputText.Root shadow>
            <InputText.Input placeholder="JohnDee"/>
          </InputText.Root>
        </FieldGroup>

        <FieldGroup >
          <Heading size="sm">Password</Heading>
          <InputText.Root shadow>
            <InputText.Icon>
              <Lock />
            </InputText.Icon>
            <InputText.Input placeholder="**********" type='password'/>
          </InputText.Root>
        </FieldGroup>
          <Button drop color={THEME.colors.secondary[400]} onClick={(e)=>{handleClick(e)}}>Cadastrar</Button>
      </SignInFormSty>

    </SignInSty>
  )
}
