import { Link } from "react-router-dom";
import noImageAvailable from "../../no-image-available/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";
import style from "../CatalogItem/CatalogItem.module.css";

const CatalogItem = ({ moto }) => {

    return (
        <div className={style.allMotos}>
            <div className={style.allMotosInfo}>

            <div>
                    {moto.imageUrl
                        ? <img src={moto.imageUrl} alt="not-alt" />
                        : <img src={noImageAvailable} alt="not-alt" />
                    }
                </div>


                <div>
                    <h2>Model: {moto.model}</h2>
                    <h2>Brand: {moto.brand}</h2>
                    <h2>cc: {moto.cc}</h2>
                    <h2>Price: {moto.price}$</h2>
                    <h5>Available from: {moto.createdAt}</h5>
                </div>


                <div>
                    <Link to={`/catalog/${moto._id}`} className="details-button">
                        Details
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default CatalogItem;
