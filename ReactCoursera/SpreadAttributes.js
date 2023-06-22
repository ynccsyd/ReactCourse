import "./App.css";

const Button = ({ type, children, ...buttonProps }) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    )
};

const LogginButton = ({ type, children, ...buttonProps }) => {
    return (
        <Button
            type="secondary"
            {...buttonProps}
            onClick={() => {
                alert("Logging in!");
            }}
        >
            {children}
        </Button>
    )
};

function App() {
    return (
        <div className="App">
            <header className="Header">Little Lemon Restaurant</header>
            <Button type="primary" onClick={() => {
                alert("Signing Up!")
            }}>
                Sign Up
            </Button>
            <LogginButton
                type="secondary" onClick={() => {
                  alert("Signing Up!")
                }}
            >
                Login
            </LogginButton>
        </div>
    )
}
export default App;
