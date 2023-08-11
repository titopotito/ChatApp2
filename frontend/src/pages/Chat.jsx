import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIHandler from "../js/apiHandler";
import ProfileImage from "../components/ProfileImage";

function Chat() {
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        APIHandler.get("/user").then((data) => {
            if (data) {
                setCurrentUser(data.user);
            } else {
                navigate("/login");
            }
        });
    }, []);

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    };
    return (
        <div style={divStyle}>
            <ChatHeader />
            <ChatBody />
            <ChatForm />
        </div>
    );
}

function ChatBody() {
    const sectionStyle = {
        flex: "1",
    };

    return <section style={sectionStyle}></section>;
}

function ChatForm() {
    const sectionStyle = {
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
        gap: "0.25rem",
        backgroundColor: "#1a1a1a",
    };
    const buttonStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        padding: "0",
        fontSize: "small",
    };

    const formStyle = {
        flex: "1",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#3b3b3b",
        borderRadius: "1rem",
        padding: "0",
    };

    const inputStyle = {
        padding: "0",
        paddingLeft: "0.5rem",
        margin: "0.25rem 0.5rem 0.25rem 0.25rem",
        flex: "1",
        border: "none",
    };
    const button2Style = {
        padding: "0.25rem",
        borderRadius: "0 15px 15px 0",
        fontSize: "small",
    };

    return (
        <section style={sectionStyle}>
            <button style={buttonStyle}>+</button>
            <button style={buttonStyle}>Im</button>
            <form action="" style={formStyle}>
                <input type="text" style={inputStyle} className="no-outline" />
                <button style={button2Style}>Send</button>
            </form>
        </section>
    );
}

function ChatHeader() {
    const headerStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        padding: "0.5rem",
    };
    const divStyle = {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        flex: "1",
        padding: "0 1rem",
    };
    const buttonStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "20px",
        padding: "0",
    };

    return (
        <header style={headerStyle}>
            <button style={buttonStyle}>Ba</button>

            <div style={divStyle}>
                <ProfileImage width="2.25rem" />
                <span>James Tito</span>
            </div>

            <button style={buttonStyle}>Ca</button>
            <button style={buttonStyle}>Vi</button>
            <button style={buttonStyle}>Pr</button>
        </header>
    );
}

export default Chat;
