import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header>
            <h1>
                <Link to={'/'} >Moto-Mania <i className="fa-solid fa-motorcycle fa-beat fa-sm"></i></Link>
            </h1>

            <nav>
                {user.email && <span style={{color: "red",marginRight: "10px"}}>{user.email}</span>}
                <Link to={'/catalog'} >All Motos</Link>

                {user.email
                    ? <div id="user">
                        <Link to={'/create'} >Add Moto</Link>
                        <Link to={'/logout'} >Logout</Link>
                    </div>

                    : <div id="guest">
                        <Link to={'/login'} >Login</Link>
                        <Link to={'/register'} >Register</Link>
                    </div>
                }
            </nav>

        </header>
    );
};

export default Header;