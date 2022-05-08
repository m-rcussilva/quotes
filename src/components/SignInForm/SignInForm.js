import axios from "axios";
import { useState } from "react";
import "./SignInForm.css";

const SignInForm = ({ toggleModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
        console.log({ name, email, password });
    };

    const handleClickRegister = () => {
        axios
            .post("http://localhost:3003/users", {
                name,
                email,
                password,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="SignInForm-overlay">
            <form className="SignInForm" onSubmit={handleSubmit}>
                <div className="SignInForm-control">
                    <label className="label" htmlFor="name">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="input"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="SignInForm-control">
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        className="input"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="SignInForm-control">
                    <label className="label" htmlFor="password">
                        Senha
                    </label>
                    <input
                        type="password"
                        className="input"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="SignInForm-container-btn">
                    <button type="submit" className="SignInForm-btn">
                        Log In
                    </button>
                </div>

                <button
                    className="SignInForm-close-modal"
                    onClick={() => toggleModal(false)}
                >
                    X
                </button>
            </form>
        </div>
    );
};

export default SignInForm;
