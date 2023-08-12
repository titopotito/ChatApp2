import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIHandler from "../js/apiHandler";
import ProfileImage from "../components/ProfileImage";

function Chat() {
    const [currentUser, setCurrentUser] = useState({});
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        APIHandler.get("/user").then((user) => {
            if (user) setCurrentUser(user);
            else navigate("/login");
        });
    }, []);

    useEffect(() => {
        const id = window.location.pathname.slice(6);
        APIHandler.get(`/messages/${id}`).then((messages) => {
            if (messages) setMessages(messages);
            else console.log("No data received from /messages/:id");
        });
    }, []);

    const inputHandler = (userInput) => {
        setUserInput(userInput);
    };

    const messagesHandler = (message) => {
        setMessages([...messages, message]);
    };

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    };

    return (
        <div style={divStyle}>
            <ChatHeader currentUser={currentUser} />
            <ChatBody messages={messages} />
            <ChatForm
                currentUser={currentUser}
                userInput={userInput}
                inputHandler={inputHandler}
                messagesHandler={messagesHandler}
            />
        </div>
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

function ChatBody(props) {
    const { messages } = props;

    const ulStyle = {
        flex: "1",
    };

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
        <ul style={ulStyle}>
            {messages.map((message) => (
                <li style={liStyle} key={message.id}>
                    <ProfileImage width="2.25rem" />
                    <p style={pStyle}>{message.text_content}</p>
                </li>
            ))}
        </ul>
    );
}

function ChatForm(props) {
    const { currentUser, userInput, inputHandler, messagesHandler } = props;

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

    const onChange = (e) => inputHandler(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        const chatroomId = window.location.pathname.slice(6);
        const message = {
            text_content: userInput,
            sender: currentUser.id,
            chatroom: chatroomId,
        };
        APIHandler.post("/messages/new", JSON.stringify(message)).then((message) => {
            if (message) messagesHandler(message);
            else console.log("No data received from /messages/new");
        });
    };

    return (
        <section style={sectionStyle}>
            <button style={buttonStyle}>+</button>
            <button style={buttonStyle}>Im</button>
            <form action="" style={formStyle} onSubmit={onSubmit}>
                <input type="text" style={inputStyle} className="no-outline" onChange={onChange} />
                <button style={button2Style}>Send</button>
            </form>
        </section>
    );
}

export default Chat;
