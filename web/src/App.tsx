import './styles/global.css'
import axios from 'axios'
import { useEffect } from 'react'
import {port,domain} from './@types/auth'

export default () => {
  useEffect(() => {
    axios
      .get(`http://${domain}:${port}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(console.error)
  }, [])

  return (
    <div>Hello World</div>
  )
}
