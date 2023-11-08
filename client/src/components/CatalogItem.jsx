import { Link } from "react-router-dom";

const CatalogItem = (props) => {


    console.log(props)

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={props.moto.imageUrl} alt="no-moto"/>
                <h6>{props.moto.model}</h6>
                <h2>{props.moto.brand}</h2>
                <Link to={`/catalog/${props.moto._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CatalogItem;
