import {InputText} from "../../components/InputText";
import { Outlet } from "react-router-dom";
import { Authorization, Drop } from "./style"


export const AuthenticationPage = ()=>{
  return(
    <Authorization>
      <Drop>
        <Outlet/>
        <InputText.Root>
          <InputText.Input />
        </InputText.Root>
      </Drop>
    </Authorization>
  )
}