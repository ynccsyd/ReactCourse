import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            Active Theme {theme}
            <hr />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                Change Theme
            </button>
        </div>
    )
}

export default Header