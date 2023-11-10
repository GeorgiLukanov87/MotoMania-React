import { Link } from "react-router-dom";

const CatalogItem = (props) => {

    console.log(props)

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={props.moto.imageUrl} alt="no-moto"/>
                <h6>Model: {props.moto.model}</h6>
                <h2>Brand: {props.moto.brand}</h2>
                <h2>cc:{props.moto.cc}</h2>
                <h2>Price:{props.moto.price}$</h2>
                <br />
                <h5>Available from:{props.moto.createdAt}</h5>

                <Link to={`/catalog/${props.moto._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CatalogItem;
