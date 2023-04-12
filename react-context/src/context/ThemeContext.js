import { createContext, useState, useEffect} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light"); //varsayılan olarak localstorage deki value değerini al yoksa light değerini al
    const values={ theme,setTheme}
    useEffect(() => {
        localStorage.setItem("theme", theme) //("key", value)
    }, [theme]);
   
   return <ThemeContext.Provider value={values}>
    {children}</ThemeContext.Provider>;
};

export default ThemeContext