import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <main>
            {" "}
            <div>
                <h1>Welcome To</h1>
                <h1 className="app-brand">
                    <span>Chat</span>
                    <span>App</span>
                </h1>
            </div>
            <form action="/login" method="POST">
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
                        <Link to="/">Need an account?</Link>
                    </small>
                </div>
            </form>
        </main>
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
