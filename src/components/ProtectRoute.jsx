import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectRoute = ( { children}) => {
    const navigate = useNavigate()
    const { user } = useAuth()
  return user ? children : navigate("/login")
};

export default ProtectRoute;