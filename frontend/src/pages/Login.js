import { useState, useEffect } from "react";

function Login() {
    return (
        <main>
            {" "}
            <div>
                <h1>Welcome To</h1>
                <h1 class="app-brand">
                    <span>Watch</span>
                    <span>App</span>
                </h1>
            </div>
            <form action="/login" method="POST">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <small>
                    <a href="/">Forgot your password?</a>
                </small>
                <button class="btn-default btn-color">Login</button>
                <small>
                    <a href="/">Need an account?</a>
                </small>
            </form>
        </main>
    );
}

export default Login;
