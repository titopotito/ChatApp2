import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "../components/Form.jsx";
import FormGroup from "../components/FormGroup.jsx";
import SuccessMessage from "../components/SuccessMessage.jsx";

function Login() {
    const location = useLocation();
    const [successMessage, setSuccessMessage] = useState({ isVisible: false, message: "" });

    useEffect(() => {
        try {
            if (location.state.message) {
                setSuccessMessage({ isVisible: true, message: location.state.message });
                window.history.replaceState({ message: null }, document.title);
            }
        } catch (error) {
            console.log("TypeError Handled");
        }
    }, []);

    const handleSuccessMessage = (state) => setSuccessMessage(state);

    return (
        <>
            {" "}
            <section>
                <h1>
                    Welcome To <span>Chat</span>
                    <span>App</span>
                </h1>
            </section>
            <Form>
                <FormGroup label="Username" type="text" name="username" />
                <FormGroup label="Password" type="password" name="password" />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <small>
                        <Link to="/">Forgot your password?</Link>
                    </small>
                    <button className="btn-default btn-color">Login</button>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem" }}>
                    <small>
                        <Link to="/register">Need an account?</Link>
                    </small>
                </div>
            </Form>
            <SuccessMessage
                isVisible={successMessage.isVisible}
                message={successMessage.message}
                setState={handleSuccessMessage}
            />
        </>
    );
}

export default Login;
