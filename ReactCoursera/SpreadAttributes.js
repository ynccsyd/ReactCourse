import "./App.css";

const Button=({type, children, ...buttonProps})=>{
    const className=type==="primary" ? "PrimaryButton": "SecondaryButton";
    return(
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    )
};


