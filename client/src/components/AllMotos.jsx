import { Link } from "react-router-dom";

const AllMotos = (props) => {

        const { moto } = props
        console.log(props)
    
    return (
        <div className="game">

            <div className="image-wrap">
                <img src={moto.imageUrl} alt="not-alt" />
            </div>

            <h3>{moto.brand}</h3>
            <h2>{moto.model}</h2>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>

            <div className="data-buttons">
                <Link to={`/catalog/${moto._id}`} className="btn details-btn">
                    Details
                </Link>

            </div>
        </div>
    );
};

export default AllMotos;