import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { isAuthenticated, login, logout } = useContext(AuthContext)
    const { isLightTheme, light, dark } = theme
    const Theme = isLightTheme ? light : dark

    const handleToggle = e => {
        toggleTheme()
    }
    const handleAuth = () => {
        if (!isAuthenticated) login()
        else logout()
    }
    const btnLogout = {
        background: 'linear-gradient(to top left, rgba(0, 0, 0, .8), rgba(0, 0, 0, .2))',
    }
    const btnLogin = {
        background: 'linear-gradient(to top left, rgba(8, 85, 228, 0.8), rgba(8, 106, 218, 0.2))',
    }
    return (
        <div className='navbar' style={{ background: Theme.background }}>
            <h1>My Hooks App</h1>
            <input type="checkbox" value={true} onChange={handleToggle} />
            <button style={isAuthenticated ? btnLogout : btnLogin} className='btn-login' onClick={handleAuth}>{isAuthenticated ? 'Logout' : 'Login'}</button>
        </div>
    )
}

export default Navbar
