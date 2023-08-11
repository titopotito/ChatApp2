import { useNavigate } from "react-router-dom";
import CookieHandler from "../js/cookieHandler";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        fetch("http://localhost:8000/logout", {
            method: "POST",
            redirect: "follow",
            headers: {
                Authorization: "Token " + CookieHandler.get("token"),
            },
        }).then((response) => {
            if (response.ok) {
                CookieHandler.delete("token");
                navigate("/login");
            }
        });
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

export default Navbar;
