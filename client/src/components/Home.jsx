import AllMotos from "./AllMotos";

const Home = (props) => {
    
    const { motos } = props

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new motos are</h2>
                <h3>Only in MotoMania</h3>
            </div>
            <img src="./images/1-moto-png-image-motorcycle-png-picture-download.png" alt="hero" />
            <div id="home-page">

                {motos.length > 0
                    ? <h1>Latest motos</h1>
                    : <p className="no-articles">No motos yet</p>
                }

                {motos.map(m => <AllMotos key={m._id} moto={m} />)}

            </div>
        </section>
    );
};

export default Home;

