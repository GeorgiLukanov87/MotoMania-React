import style from "../Home/Home.module.css";

import AllMotos from "../AllMotos/AllMotos";

const Home = (props) => {

    const { motos } = props
    
    return (
        <section id="welcome-world">
            <div className={style.welcomeMessage}>
                <h2>Sell your bike Here!</h2>
                <h3>Moto-Mania</h3>
                <br />
                <video controls autoPlay muted loop>
                    <source src="videos/The King is back - Introducing the GSX-R1000 Concept.mp4" type="video/mp4" />
                </video>

            </div>
            <img src="./images/1-moto-png-image-motorcycle-png-picture-download.png" alt="hero" />

            <div className="home-page">

                {motos?.length > 0
                    ? <h1>Available Motorcycles</h1>
                    : <p className="no-articles">No motorcycles yet!</p>
                }
            </div>
                
            <div id="home-page">

                {motos?.length > 0 &&
                    motos.map(m => <AllMotos key={m._id} moto={m} />)
                }

            </div>
        </section>
    );
};

export default Home;

