import style from "../Register/Register.module.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from "react";

import { register } from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            toast.error('Passwords do NOT match!', {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        register(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            });
    }

    return (
        <section id="register-page" className={style.auth}>
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <div className="brand-logo" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@email.com" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Password..." />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Repeat password..." />

                    <button className="btn submit" type="submit">Register</button>
                    <p className="field">
                        <span>
                            If you already have profile click
                            <Link
                                to={'/login'} >
                                <span> here</span>
                            </Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Register;