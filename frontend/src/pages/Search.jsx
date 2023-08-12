import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APIHandler from "../js/apiHandler";
import Navbar from "../components/Navbar";
import ProfileImage from "../components/ProfileImage";

function Search() {
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

    return (
        <>
            <Navbar />
            <SearchBar />
            <UserList />
        </>
    );
}

function SearchBar() {
    const divStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "1rem",
    };

    const inputStyle = {
        flex: "1",
        padding: "0",
        height: "20px",
        backgroundColor: "white",
        color: "black",
        border: "none",
        margin: "0.25rem 0.25rem 0.25rem 0.75rem",
    };

    const buttonStyle = {
        backgroundColor: "white",
        color: "black",
        fontSize: "small",
        paddingLeft: "0.25rem",
        paddingRight: "0.75rem",
        borderRadius: "0 1rem 1rem 0",
    };

    return (
        <form action="">
            <div style={divStyle}>
                <input type="text" style={inputStyle} className="no-outline" />
                <button style={buttonStyle}>Search</button>
            </div>
        </form>
    );
}

function UserList() {
    const liStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "1rem",
    };

    const aStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
    };

    const buttonStyle = {
        fontSize: "small",
    };

    return (
        <ul>
            <li style={liStyle}>
                <a style={aStyle} href="">
                    <ProfileImage />
                    <span>James Tito</span>
                </a>
                <button style={buttonStyle}>Add</button>
            </li>
            <li style={liStyle}>
                <a style={aStyle} href="">
                    <ProfileImage />
                    <span>James Tito</span>
                </a>
                <button style={buttonStyle}>Add</button>
            </li>
        </ul>
    );
}

export default Search;
