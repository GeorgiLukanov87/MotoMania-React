import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Logout } from './components/Logout';
import CreateGame from './components/CreateGame';
import Catalog from './components/Catalog';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const userLogout = () => {
        setAuth({});
    }

    return (
        <>
            <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path="/create" element={<CreateGame />} />
                            <Route path="/catalog" element={<Catalog />} />
                        </Routes>
                    </main>
                </div>
            </AuthContext.Provider>
        </>
    )
}

export default App;
