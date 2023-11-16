import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header>
            <h1>
                <NavLink to={'/'} >Moto-Mania <i className="fa-solid fa-motorcycle fa-beat fa-sm"></i></NavLink>
            </h1>

            <nav>
                {user.email && <span style={{ color: "red", marginRight: "10px" }}>{user.email}</span>}
                <NavLink to={'/catalog'} style={({ isActive }) => ({
                    color: isActive ? 'greenyellow' : 'white'
                })}>All Motos</NavLink>

                {user.email
                    ? <div id="user">
                        <NavLink to={'/create'} style={({ isActive }) => ({
                            color: isActive ? 'greenyellow' : 'white'
                        })}>Create Offer</NavLink>

                        <NavLink to={'/logout'} style={({ isActive }) => ({
                            color: isActive ? 'greenyellow' : 'white'
                        })}>Logout</NavLink>
                    </div>

                    : <div id="guest">
                        <NavLink to={'/login'} style={({ isActive }) => ({
                            color: isActive ? 'greenyellow' : 'white'
                        })}>Login</NavLink>
                        
                        <NavLink to={'/register'} style={({ isActive }) => ({
                            color: isActive ? 'greenyellow' : 'white'
                        })}>Register</NavLink>
                    </div>
                }
            </nav>

        </header>
    );
};

export default Header;