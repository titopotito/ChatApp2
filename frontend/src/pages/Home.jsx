import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import APIHandler from "../js/apiHandler";
import ProfileImage from "../components/ProfileImage";
import Navbar from "../components/Navbar";

function Home() {
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        APIHandler.get("/user").then((user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                navigate("/login");
            }
        });
    }, []);

    const sectionStyle = { maxWidth: "360px" };
    return (
        <section style={sectionStyle}>
            <Navbar />
            <ActiveUserList />
            <ChatList />
        </section>
    );
}

function ActiveUserList() {
    const sectionStyle = { margin: "0.5rem" };
    const pStyle = { margin: "0.5rem 0" };
    const divStyle = {
        display: "flex",
        flexDirection: "flex-start",
        gap: "1rem",
        overflowX: "scroll",
        padding: "0 0 0.5rem 0",
    };

    return (
        <section style={sectionStyle}>
            <p style={pStyle}>Active Now</p>
            <div style={divStyle}>
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
            </div>
        </section>
    );
}

function ChatList() {
    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        APIHandler.get("/chatrooms")
            .then((data) => {
                setChatrooms(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const aStyle = { display: "flex", gap: "1rem", padding: "0.7rem 1rem" };

    const div2Style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexGrow: "1",
    };
    const div3Style = { display: "flex", justifyContent: "space-between", width: "100%" };

    return (
        <section>
            <ul>
                {chatrooms.map((chatroom) =>
                    chatroom.latest_message ? (
                        <li key={chatroom.id}>
                            <Link to={`/chat/${chatroom.id}`} style={aStyle}>
                                <ProfileImage />
                                <div style={div2Style}>
                                    <strong>
                                        {chatroom.members[0].first_name + " " + chatroom.members[0].last_name}
                                    </strong>
                                    <div style={div3Style}>
                                        <span>{chatroom.latest_message.text_content}</span>
                                        <span>11:00</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ) : (
                        ""
                    )
                )}
            </ul>
        </section>
    );
}

export default Home;
