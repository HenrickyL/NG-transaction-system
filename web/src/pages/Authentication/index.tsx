import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { AuthorizationSty, Drop } from "./style"
import { useEffect, useState } from "react";
import {Heading} from '../../components'
import { THEME } from './../../Utils/Theme';

interface OutletAuthProps{
  setClick: React.Dispatch<React.SetStateAction<boolean>>
  setAnotherLink: React.Dispatch<React.SetStateAction<AnotherLink>>
  setOtherTab: React.Dispatch<React.SetStateAction<boolean>>
  click: boolean
}
interface AnotherLink{
  to: string
  title: string
  color: string
}
export const AuthenticationPage = ()=>{
  const [duration, setDuration] = useState<string>('6s')
  const [click, setClick] = useState<boolean>(false)
  const [anotherLink, setAnotherLink] = useState<AnotherLink>({to:'/', title:'Error', color: THEME.colors.system.error})
  const [otherTab, setOtherTab] = useState<boolean>(false)

  useEffect(()=>{
      if(otherTab){
        setDuration(click?'0.5s': '6s')
      }
  },[click])


  useEffect(()=>{
    const time = Number(duration.slice(0,-1))
    if(time< 2){
      setTimeout(() => {
        setDuration(`${time+0.5}s`)
        console.log(time)
      }, 2500);
    }else{
      setDuration('6s')

    }
  },[duration])
  return(
    <AuthorizationSty>
      <Drop  time={duration} main>
        <Outlet context={{setAnotherLink, setClick, click,setOtherTab}}/>
      </Drop>

      <NavLink to={anotherLink.to}>
        <Drop size="sm" color={anotherLink.color}>
            <Heading size="lg">{anotherLink.title}</Heading>
        </Drop>
      </NavLink>

    </AuthorizationSty>
  )
}

export function useDrop(){
  return useOutletContext<OutletAuthProps>();
}