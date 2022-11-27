import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthenticationPage } from './pages/Authentication'
import { Login } from './pages/Authentication/Login'
import { SignIn } from './pages/Authentication/SignIn/index';
import {VARIABLES} from './Utils/Variables'
export const App = ()=>{

  return (
    <BrowserRouter>
      <Routes>
          <Route path='' element={<AuthenticationPage />}>
            <Route path={VARIABLES.urls.signIn} element={<SignIn />}/>
            <Route path={VARIABLES.urls.login} element={<Login />}/>
          </Route>

          <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>   
    </BrowserRouter>
  )
}
 
