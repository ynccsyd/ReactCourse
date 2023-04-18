import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light"); //varsayılan olarak localstorage deki value değerini al yoksa light değerini al
    const values = { theme, setTheme }
    useEffect(() => {
        localStorage.setItem("theme", theme) //("key", value)
    }, [theme]);

    return (<ThemeContext.Provider value={values}>
        {children}</ThemeContext.Provider>);
};
// const useTheme= () => useContext()
// export default {ThemeContext, useTheme}
export const useTheme= () => useContext(ThemeContext);