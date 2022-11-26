import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthenticationPage } from './pages/Authentication'
import { Login } from './pages/Authentication/Login'
import './styles/global.css'
import { SignIn } from './pages/Authentication/SignIn/index';

export const App = ()=>{

  return (
    <BrowserRouter>
      <Routes>
          <Route path='' element={<AuthenticationPage />}>
            <Route path='login' element={<Login />}/>
            <Route path='sign-in' element={<SignIn />}/>
          </Route>

          <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>   
    </BrowserRouter>
  )
}
 
