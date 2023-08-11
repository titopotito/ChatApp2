import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIHandler from "../js/apiHandler";

function NewChat() {
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
        flexDirection: "column",
        backgroundColor: "#3b3b3b",
        borderRadius: "1rem",
        padding: "0",
    };

    const inputStyle = {
        padding: "0",
        paddingLeft: "0.5rem",
        margin: "0.25rem 0.5rem 0.25rem 0.25rem",
        flex: "1",
    };
    const button2Style = {
        padding: "0.25rem",
        borderRadius: "0 15px 15px 0",
        fontSize: "small",
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const members = [currentUser.username, e.target.children[0].value];
        const textContent = e.target.children[1].value;
        const newChatroomId = await APIHandler.post("/chatrooms/new", JSON.stringify({ members: members })).then(
            (data) => (data ? data.chatroom_id : null)
        );
        if (newChatroomId) {
            const message = {
                sender: currentUser.id,
                text_content: textContent,
                chatroom: newChatroomId,
            };

            const response = await APIHandler.post("/messages/new", JSON.stringify(message));
            console.log(response.message);
        }
    };

    return (
        <section style={sectionStyle}>
            <form action="POST" style={formStyle} onSubmit={handleSubmit}>
                <input type="text" style={inputStyle} name="username" />
                <input type="text" style={inputStyle} name="message" />
                <button style={button2Style}>Send</button>
            </form>
        </section>
    );
}
export default NewChat;
