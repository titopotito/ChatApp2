import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APIHandler from "../js/apiHandler";
import ProfileImage from "../components/ProfileImage";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        APIHandler.get("/user")
            .then((data) => {
                if (!data.user || data.user === "") {
                    navigate("/login");
                }
            })
            .catch((error) => console.log(error));
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

function Navbar() {
    const handleLogout = (e) => {
        e.preventDefault();
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== "") {
                const cookies = document.cookie.split(";");
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === name + "=") {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        fetch("http://localhost:8000/logout", {
            method: "POST",
            redirect: "follow",
            headers: {
                Authorization: "Token " + getCookie("token"),
            },
        }).then((response) => console.log(response));
    };

    const sectionStyle = {
        display: "flex",
        justifyContent: "space-even",
    };
    const buttonStyle = {
        flexGrow: "1",
        borderRadius: "0",
        padding: "1rem",
    };

    return (
        <section style={sectionStyle}>
            <button style={buttonStyle}>Messages</button>
            <button style={buttonStyle}>Search</button>
            <button style={buttonStyle} onClick={handleLogout}>
                Settings
            </button>
        </section>
    );
}

function ChatList() {
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
                <li>
                    <a href="" style={aStyle}>
                        <ProfileImage />
                        <div style={div2Style}>
                            <strong>James Tito</strong>
                            <div style={div3Style}>
                                <span>This is a message</span>
                                <span>11:00</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" style={aStyle}>
                        <ProfileImage />
                        <div style={div2Style}>
                            <strong>James Tito</strong>
                            <div style={div3Style}>
                                <span>This is a message</span>
                                <span>11:00</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="" style={aStyle}>
                        <ProfileImage />
                        <div style={div2Style}>
                            <strong>James Tito</strong>
                            <div style={div3Style}>
                                <span>This is a message</span>
                                <span>11:00</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Home;
