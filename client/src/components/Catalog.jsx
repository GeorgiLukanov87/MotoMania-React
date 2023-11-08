import CatalogItem from "./CatalogItem";
import { Link } from "react-router-dom";

const Catalog = (props) => {

    return (
        <section id="catalog-page">

            {props.motos?.length > 0
                ? <h1>All Motos</h1>
                : <h3 className="no-articles">No articles yet</h3>
            }

            {props.motos.map(x => <CatalogItem key={x._id} moto={x} />)}
            <button className="btn submit"><Link to={'/'}>Back</Link></button>
        </section>
    );
}

export default Catalog;