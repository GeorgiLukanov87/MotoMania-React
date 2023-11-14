import { Link } from "react-router-dom";

const CatalogItem = ({ moto }) => {

    return (
        <div className="allMotos">
            <div className="allMotos-info">

                {moto.imageUrl
                    ? <img src={moto.imageUrl} alt="not-alt" />
                    : <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png" alt="not-alt" />
                }

                <h6>Model: {moto.model}</h6>
                <h2>Brand: {moto.brand}</h2>
                <h2>cc:{moto.cc}</h2>
                <h2>Price:{moto.price}$</h2>
                <br />
                <h5>Available from:{moto.createdAt}</h5>

                <Link to={`/catalog/${moto._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CatalogItem;
