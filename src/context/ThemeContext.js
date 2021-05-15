import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const Theme = {
    isLightTheme: true,
    light: {
        background: 'rgb(243, 239, 239)',
        ui: 'rgb(216, 211, 211)',
        color: 'rgb(0, 140, 255)',
    },
    dark: {
        background: '#000',
        ui: '#111',
        color: '#fff'
    }
}

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(Theme)
    const toggleTheme = () => {
        const newTheme = { ...theme, isLightTheme: !theme.isLightTheme }
        setTheme(newTheme)
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
