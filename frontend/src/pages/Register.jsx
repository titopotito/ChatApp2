import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form.jsx";
import FormGroup from "../components/FormGroup.jsx";
import APIHandler from "../js/apiHandler.js";

function Register() {
    const navigate = useNavigate();

    function onSubmitHandler(e) {
        e.preventDefault();
        APIHandler.register(new FormData(e.target))
            .then((data) => {
                navigate("/login", { state: { message: "Registration complete!" } });
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            {" "}
            <section>
                <h1>
                    Welcome To <span>Chat</span>
                    <span>App</span>
                </h1>
            </section>
            <Form onSubmit={onSubmitHandler}>
                <FormGroup label="First Name" type="text" name="first_name" />
                <FormGroup label="Last Name" type="text" name="last_name" />
                <FormGroup label="Email" type="email" name="email" />
                <FormGroup label="Username" type="text" name="username" />
                <FormGroup label="Password" type="password" name="password" />
                <FormGroup label="Confirm Password" type="password" name="password" />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <small>
                        <Link to="/login">Already have an account?</Link>
                    </small>
                    <button className="btn-default btn-color">Register</button>
                </div>
            </Form>
        </>
    );
}

export default Register;
