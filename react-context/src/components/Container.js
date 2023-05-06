import Button from "./Button"
import Header from './Header';
import Profile from "./Profile"
import {useTheme} from "../context/ThemeContext"

const Container = () => {
    const {theme}=useTheme();
    return (
        <div className={`app ${theme}`}>
            <Header />
            <Button />
            <Profile/>
        </div>
    )
}

export default Container