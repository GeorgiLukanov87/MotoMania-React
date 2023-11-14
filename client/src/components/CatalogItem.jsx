import { Link } from "react-router-dom";

const CatalogItem = (props) => {

    console.log(props)

    return (
        <div className="allMotos">
            <div className="allMotos-info">

                {props.moto.imageUrl
                    ? <img src={props.moto.imageUrl} alt="not-alt" />
                    : <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png" alt="not-alt" />
                }

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
