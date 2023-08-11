import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Search from "./pages/Search.jsx";
import Chat from "./pages/Chat.jsx";
import NewChat from "./pages/NewChat.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/chat/:id" element={<Chat />} />
                <Route path="/chat/new" element={<NewChat />} />
            </Routes>
        </>
    );
}

export default App;
