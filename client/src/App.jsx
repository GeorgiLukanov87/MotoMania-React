import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

import { useLocalStorage } from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';

import { getAll } from "./services/MotoService";
import { Logout } from './components/Logout';

import Home from './components/Home';
import Header from "./components/Header";
import Login from './components/Login';
import Catalog from './components/Catalog';
import Register from './components/Register';
import CreateMoto from './components/CreateMoto';
import MotoDetails from './components/MotoDetails';


function App() {
    const [motos, setMotos] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    useEffect(() => {
        getAll().then(motoResult => {

            setMotos(Object.values(motoResult))
        });
    }, []);

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const userLogout = () => {
        setAuth({});
    }

    const addGameHandler = (motoData) => {
        console.log(`last data${motoData}`)
        setMotos(oldMotos => [
            ...oldMotos,
            {
                ...motoData,
                _id: "12",
            },
        ]);

        navigate('/catalog')
    }

    return (
        <>
            <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home motos={motos} />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path="/create" element={<CreateMoto addGameHandler={addGameHandler} />}  />
                            <Route path="/catalog" element={<Catalog motos={motos}/>} />
                            <Route path="/catalog/:motoId" element={<MotoDetails motos={motos} />} />
                        </Routes>
                    </main>
                </div>
            </AuthContext.Provider>
        </>
    )
}

export default App;
