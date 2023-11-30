
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { login } from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

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
                if (authData.code == 403) {
                    toast.error('Login or password don\'t match', {
                        position: "top-center",
                        autoClose: 3000,
                        })
                    return;
                }

                userLogin(authData);
                console.log(authData)
                navigate('/')
                toast.success('Login succesfully', {
                    position: "top-center",
                    autoClose: 3000,
                    })

            })
            .catch(err => console.log(err))
    }

    return (
        <section id="login-page" className={style.auth}>
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    <div className="brand-logo" />

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