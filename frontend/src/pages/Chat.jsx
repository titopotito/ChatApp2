import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import APIHandler from "../js/apiHandler";
import ProfileImage from "../components/ProfileImage";

function Chat(props) {
    const [currentUser, setCurrentUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        APIHandler.get("/user").then((user) => {
            if (user) setCurrentUser(user);
            else navigate("/login");
        });
    }, []);

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    };
    return (
        <div style={divStyle}>
            <ChatHeader currentUser={currentUser} />
            <ChatBody />
            <ChatForm />
        </div>
    );
}

function MessageBody(props) {
    const { message } = props;

    const liStyle = {
        display: "flex",
        gap: "1rem",
    };

    const pStyle = {
        flex: "1",
        margin: "0",
        textAlign: "start",
        backgroundColor: "black",
    };

    return (
        <li style={liStyle}>
            <ProfileImage width="2.25rem" />
            <p style={pStyle}>{message.text_content}</p>
        </li>
    );
}

function ChatBody() {
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const id = location.pathname.slice(6);

    useEffect(() => {
        APIHandler.get(`/messages/${id}`).then((data) => {
            console.log(data);
            if (data) setMessages(data);
            else console.log("no messages");
        });
    }, []);

    const ulStyle = {
        flex: "1",
    };

    return (
        <ul style={ulStyle}>
            {messages.map((message) => (
                <MessageBody message={message} key={message.id} />
            ))}
        </ul>
    );
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

function ChatHeader(props) {
    const { currentUser } = props;
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
                <span>{`${currentUser.first_name} ${currentUser.last_name}`}</span>
            </div>

            <button style={buttonStyle}>Ca</button>
            <button style={buttonStyle}>Vi</button>
            <button style={buttonStyle}>Pr</button>
        </header>
    );
}

export default Chat;
