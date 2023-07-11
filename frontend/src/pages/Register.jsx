import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form.jsx";
import FormGroup from "../components/FormGroup.jsx";

function Register() {
    function onSubmitHandler(e) {
        fetch("http://localhost:8000/register", {
            method: "POST",
            body: new FormData(e.target),
        })
            .then((response) => {
                if (!response.ok) {
                    switch (response.status) {
                        case 400:
                            console.log("error 400");
                            break;
                        case 401:
                            console.log("error 401");
                            break;
                        case 404:
                            console.log("error 404");
                            break;
                        case 500:
                            console.log("error 500");
                            break;
                    }
                }
                return response.json();
            })
            .then((data) => console.log(data))
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
