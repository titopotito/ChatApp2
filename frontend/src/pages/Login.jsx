import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "./Form.jsx";

function Login() {
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
        </>
    );
}

function FormGroup(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type={props.type} name={props.name} />
        </div>
    );
}

export default Login;
