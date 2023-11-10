import CatalogItem from "./CatalogItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Catalog = (props) => {
    const { user } = useContext(AuthContext);

    return (
        <section id="catalog-page">

            {props.motos?.length > 0
                ? <h1>All Motos</h1>
                : <h3 className="no-articles">No articles yet</h3>
            }

            {props.motos.map(x => <CatalogItem key={x._id} moto={x} />)}
            
            
            {user && 
            <button className="btn submit"><Link to={'/create'}>Add moto</Link></button>
            
            }

            <button className="btn submit"><Link to={'/'}>Back</Link></button>

        </section>
    );
}

export default Catalog;