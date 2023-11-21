import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useLocalStorage } from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';

import { getAll } from "./services/MotoService";
import { Logout } from './components/Logout/Logout';

import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Catalog from './components/Catalog/Catalog';
import CreateMoto from './components/CreateMoto/CreateMoto';
import MotoDetails from './components/MotoDetails/MotoDetails';
import SomethingWrong from './components/SomethingWrong/SomethingWrong';
import EditMoto from './components/EditMoto/EditMoto';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {
    const [motos, setMotos] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    
    useEffect(() => {
        debugger
        getAll().then(motoResult => {
            if (motoResult.code= 404){
                return;
            }
            setMotos(Object.values(motoResult))
        })
        .catch(err=>console.log(err));
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
                            <Route path="/" element={<Home motos={motos} />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path="/create" element={<CreateMoto addMotoHandler={addMotoHandler} />} />
                            <Route path="/catalog" element={<Catalog motos={motos} />} />
                            <Route path="/catalog/:motoId" element={<MotoDetails motos={motos} removeMotoFromState={removeMotoFromState} addComment={addComment} />} />

                            <Route
                                path="/edit/:motoId"
                                element={<EditMoto updateAppState={() => getAll().then((motoResult) =>
                                    setMotos([...Object.values(motoResult)].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))))} />} />

                            <Route path="*" element={<SomethingWrong />} />
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
