import styles from "../AllMotos/AllMotos.module.css";
import noImageAvailable from "../../no-image-available/no-image.png";

import { Link } from "react-router-dom";

const AllMotos = ({
    moto,
}) => {


    return (
        <div className={styles.moto}>
            <div className="image-wrap">
                {moto.imageUrl
                    ? <img src={moto.imageUrl} alt="not-alt" />
                    : <img src={noImageAvailable} alt="not-alt" />
                }
            </div>

            <h3>{moto.brand}</h3>
            <h4>Price:{moto.price} $</h4>
            <h5>Available from: {moto.createdAt}</h5>

            <div className="data-buttons">
                <Link
                    to={`/catalog/${moto._id}`}
                    className="btn details-btn">
                    Details
                </Link>
            </div>

        </div>
    );
};

export default AllMotos;