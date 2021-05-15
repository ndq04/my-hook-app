import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const login = () => {
        setIsAuthenticated(true)
        alert('You are logged in !')
    }
    const logout = () => {
        if (window.confirm('Are you sure you want to logout ?')) {
            setIsAuthenticated(false)
        }
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
