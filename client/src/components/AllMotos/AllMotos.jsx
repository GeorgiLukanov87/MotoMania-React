import styles from "../AllMotos/AllMotos.module.css";

import { Link } from "react-router-dom";

const AllMotos = (props) => {

    const { moto } = props

    return (
        <div className={styles.moto}>
            <div className="image-wrap">

                {moto.imageUrl
                    ? <img src={moto.imageUrl} alt="not-alt" />
                    : <img src="../../../imagesdepositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg" alt="not-alt" />
                }

            </div>

            <h3>{moto.brand}</h3>
            <h4>{moto.model}</h4>
            <h4>{moto.cc}cc</h4>
            <h4>Price:{moto.price} $</h4>
            <h5>Available from: {props.moto.createdAt}</h5>

            <div className="data-buttons">
                <Link to={`/catalog/${moto._id}`} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default AllMotos;