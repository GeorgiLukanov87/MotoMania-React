import { Link } from "react-router-dom";

const AllMotos = ({
    moto,
}) => {
    return (
        <div className="game">

            <div className="image-wrap">
                <img src={moto.imageUrl} alt="not-alt" />
            </div>

            <h3>{moto.title}</h3>
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