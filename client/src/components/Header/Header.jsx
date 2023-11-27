import styles from "../Header/Header.module.css";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header className={styles.headerModule}>
            <h1>
                <NavLink to={'/'} >Moto-Mania <i className="fa-solid fa-motorcycle fa-beat fa-sm"></i></NavLink>
            </h1>
            <nav>
                <NavLink to={'/about'}
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '3px solid red' : ''
                    })}>About
                </NavLink>

                <NavLink to={'/catalog'}
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '3px solid red' : ''
                    })}>All Motos
                </NavLink>

                {user.email
                    ? <div id="user">

                        <NavLink to={'/location'}
                            style={({ isActive }) => ({
                                borderBottom: isActive ? '3px solid red' : ''
                            })}>Locations
                        </NavLink>

                        <NavLink to={'/create'} style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid red' : ''
                        })}>Create Offer
                        </NavLink>

                        <NavLink to={'/logout'} style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid red' : ''
                        })}>Logout
                        </NavLink>

                    </div>

                    : <div id="guest">
                        <NavLink to={'/login'} style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid red' : ''
                        })}>Login
                        </NavLink>

                        <NavLink to={'/register'} style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid red' : ''
                        })}>Register
                        </NavLink>
                    </div>
                }
                {user.email && <span>|</span>}
                {user.email && <span className={styles.emailSpan}>{user.email}</span>}
            </nav>

        </header>
    );
};

export default Header;