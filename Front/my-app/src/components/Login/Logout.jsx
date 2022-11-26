import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../context/userContext'

const Logout = () => {

    const navigate = useNavigate()
    const {setUser}=useContext(userContext)

    const logout=() => {
        setUser(false)
        localStorage.removeItem("jwt")
        localStorage.removeItem("token")
        localStorage.removeItem("apellido")
        localStorage.removeItem("nombre")
        localStorage.removeItem("rol")
        localStorage.removeItem("email");
        localStorage.removeItem("idUsuario");

    }

  return (
    <div>
      <button onClick={logout}>X</button>
    </div>
  )
}

export default Logout
