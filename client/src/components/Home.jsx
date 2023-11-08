const Home = () => {

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new motos are</h2>
                <h3>Only in MotoMania</h3>
            </div>
            <img src="./images/1-moto-png-image-motorcycle-png-picture-download.png" alt="hero" />
            <div id="home-page">

                <h1>Latest Moto</h1>
                <p className="no-articles">No motos yet</p>

            </div>
        </section>
    );
};

export default Home;

// import AllGames from "./allGames/allGames";
// const Home = (props) => {

//     const { games } = props

//     return (
//         <section id="welcome-world">
//             <div className="welcome-message">
//                 <h2>ALL new games are</h2>
//                 <h3>Only in GamesPlay</h3>
//             </div>
//             <img src="./images/four_slider_img01.png" alt="hero" />
//             <div id="home-page">

//                 {games.length > 0
//                     ? <h1>Latest Games</h1>
//                     : <p className="no-articles">No games yet</p>
//                 }
                
//                 {games.map(x => <AllGames key={x._id} game={x} />)}

//             </div>
//         </section>
//     );
// };

// export default Home;
