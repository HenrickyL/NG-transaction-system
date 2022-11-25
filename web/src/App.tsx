import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './styles/global.css'

export const App = ()=>{

  return (
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Home />}/>

          <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>   
    </BrowserRouter>
  )
}
 
