import { Link } from "react-router-dom";

const AllMotos = (props) => {

        const { moto } = props

    
    return (
        <div className="game">

            <div className="image-wrap">
                <img src={moto.imageUrl} alt="not-alt" />
            </div>

            <h3>{moto.brand}</h3>
            <h2>{moto.model}</h2>
            <h4>CC:{moto.cc}</h4>
            <h4>Price:{moto.price} $</h4>
            <h5>Available from:{props.moto.createdAt}</h5>

            <div className="data-buttons">
                <Link to={`/catalog/${moto._id}`} className="btn details-btn">
                    Details
                </Link>

            </div>
        </div>
    );
};

export default AllMotos;