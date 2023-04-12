import Button from "./Button"
import Header from './Header';
import { useContext } from 'react';
import ThemeContext from "../context/ThemeContext"

const Container = () => {
    const {theme}=useContext(ThemeContext);
    return (
        <div className={`app ${theme}`}>
            <Header />
            <Button />
        </div>
    )
}

export default Container