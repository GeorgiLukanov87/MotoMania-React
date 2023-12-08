import style from "../CatalogItem/CatalogItem.module.css";
import noImageAvailable from "../../no-image-available/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";

import { Link } from "react-router-dom";


const CatalogItem = ({
    moto,
}) => {

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
                    <h2><span className={style.h2Span}>Brand</span>: {moto.brand}</h2>
                    <h2><span className={style.h2Span}>Model</span>: {moto.model}</h2>
                    <h2><span className={style.h2Span}>cc</span>: {moto.cc}</h2>
                    <h2><span className={style.h2Span}>Price</span>: {moto.price}$</h2>
                    <h5><span className={style.h2Span}>Available</span> from: {moto.createdAt}</h5>
                </div>

                <div>
                    <Link
                        to={`/catalog/${moto._id}`}
                        className="details-button"
                    >
                        Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CatalogItem;
