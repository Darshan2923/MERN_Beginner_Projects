import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    return (
        <section id='auth'>
            <Register />
            <Login />
        </section>
    )
}

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", { username, password })
            alert("Registration completed successfully!!!");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Login"
            onSubmit={onSubmit}
        />
    );
};

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", { username, password })
            window.location.reload()
            alert("Registration completed successfully!!!");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Register"
            onSubmit={onSubmit}
        />
    );
};

const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <p className="form-title">{label} to your account</p>
            <div className="input-container">
                <input type="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} />
                <span>
                </span>
            </div>
            <div className="input-container">
                <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                <span></span>
            </div>
            <button type="submit" className="submit" >
                {label}
            </button>
        </form>

    );
}

export default Auth