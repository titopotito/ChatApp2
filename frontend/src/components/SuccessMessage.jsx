import { useState } from "react";

function SuccessMessage(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const divStyle = {
        fontSize: "0.75rem",
        color: "#155724",
        backgroundColor: "#d4edda",
        border: "1px solid #c3e6cb",
        borderRadius: "0.5rem",
        padding: "1rem",
        position: "absolute",
        top: "30px",
        right: "30px",
        animationName: "fadein",
        animationDuration: "1s",
    };

    const pStyle = {
        margin: "0",
        paddingRight: "25px",
    };

    const buttonStyle = {
        position: "absolute",
        width: "1rem",
        top: "5px",
        right: "5px",
        fontSize: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: isHover ? "red" : "#155724",
        backgroundColor: "#d4edda",
        border: "none",
    };

    return (
        <>
            {props.isVisible ? (
                <div style={divStyle}>
                    <p style={pStyle}>{props.message}</p>
                    <button
                        className="success-message"
                        style={buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => props.setState({ isVisible: false, message: "" })}
                    >
                        <span>close</span>
                    </button>
                </div>
            ) : (
                console.log()
            )}
        </>
    );
}

export default SuccessMessage;
