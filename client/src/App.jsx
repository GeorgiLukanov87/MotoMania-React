import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useLocalStorage } from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';

import { getAll } from "./services/MotoService";
import { Logout } from './components/Logout/Logout';

import Home from './components/Home/Home';
import About from './components/About/About';
import Header from "./components/Header/Header";
import Catalog from './components/Catalog/Catalog';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreateMoto from './components/CreateMoto/CreateMoto';
import EditMoto from './components/EditMoto/EditMoto';
import MotoDetails from './components/MotoDetails/MotoDetails';
import Specs from './components/Specs/Specs';
import SomethingWrong from './components/SomethingWrong/SomethingWrong';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import LocationSearch from './components/LocationSearch/LocationSearch';
import PrivateRoutes from './utils/PrivateRoutes';
import AuthRoutes from './utils/GuestRoutes';
import Footer from './components/Footer/Footer';

function App() {
    const [motos, setMotos] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    useEffect(() => {
        getAll().then(motoResult => {
            if (motoResult.code == 404) {
                setMotos([])
                return;
            }
            setMotos(Object.values(motoResult))
        })
    }, []);

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const userLogout = () => {
        setAuth({});
    }

    const addMotoHandler = (motoData) => {
        setMotos(oldMotos => [
            ...oldMotos,
            motoData
        ]);
        navigate('/catalog');
    }

    function removeMotoFromState(motoId) {
        setMotos(oldState => oldState.filter(moto => moto._id !== motoId));
    }

    const addComment = (motoId, comment) => {
        setMotos((state) => {
            const updatedMotos = state.map((moto) => {
                if (moto._id === motoId) {
                    const updatedComments = [...(moto.comments || []), comment];
                    return { ...moto, comments: updatedComments };
                }
                return moto;
            });

            return updatedMotos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        });
    };

    return (
        <>
            <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>

                            {/* Authenticated routes */}
                            <Route element={<AuthRoutes />}>
                                <Route path="/register" element={<Register />} />
                                <Route path="/login" element={<Login />} />
                            </Route>

                            {/* Guest routes */}
                            <Route path="/" element={<Home motos={motos} />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/catalog" element={<Catalog motos={motos} />} />
                            <Route path="/catalog/:motoId"
                                element={<MotoDetails motos={motos} removeMotoFromState={removeMotoFromState} addComment={addComment} />} />
                            <Route path="*" element={<SomethingWrong />} />

                            {/* Private routes */}
                            <Route element={<PrivateRoutes />}>
                                <Route path='/logout' element={<Logout />} />
                                <Route path="/create" element={<CreateMoto addMotoHandler={addMotoHandler} />} />
                                <Route path="/edit/:motoId"
                                    element={<EditMoto updateAppState={() => getAll().then((motoResult) => setMotos([...Object.values(motoResult)]
                                        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))))} />} />

                                <Route path="/location/:cityName" element={<LocationSearch />} />
                                <Route path="/location" element={<LocationSearch />} />
                                <Route path="/specs/:brandmodel" element={<Specs />} />
                            </Route>

                        </Routes>
                        <ScrollToTopButton />
                        <Footer />
                    </main>
                </div>
            </AuthContext.Provider>
        </>
    );
}

export default App;
