import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { login } from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target))

        console.log(email)
        console.log(password)

        login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
                
            })
            .catch(() => {
                navigate('/404')
            })
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" autoComplete="off" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password..." />

                    
                    <button className="btn submit" type="submit">Login</button>
                    <p className="field">
                        <span>
                            If you don't have profile click<Link to={'/register'} >here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );

};

export default Login;