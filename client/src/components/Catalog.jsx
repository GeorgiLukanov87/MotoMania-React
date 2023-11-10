import React, { useContext, useState } from 'react';
import SearchBar from './SearchBar';
import CatalogItem from './CatalogItem';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

const Catalog = ({ motos }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMotos, setFilteredMotos] = useState(motos);
    const { user } = useContext(AuthContext);

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = motos.filter((moto) =>
            moto.brand.toLowerCase().includes(term.toLowerCase()) ||
            moto.model.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredMotos(filtered);
    };

    return (
        <div>
            <section id="catalog-page">
                <SearchBar onSearch={handleSearch} />

                <h1>All Motos</h1>

                {filteredMotos.length > 0 ? (
                    <div>
                        {filteredMotos.map((moto) => (
                            <CatalogItem key={moto._id} moto={moto} />
                        ))}
                    </div>
                ) : (
                    <h3 className="no-articles">No matching articles</h3>
                )}

                {user.email && <button className="btn submit"><Link to={'/create'}>Add moto</Link></button>}

                <button className="btn submit">
                    <Link to={'/'}>Back</Link>
                </button>
            </section>
        </div>
    );
};

export default Catalog;






// import CatalogItem from "./CatalogItem";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";

// const Catalog = (props) => {
//     const { user } = useContext(AuthContext);

//     return (
//         <section id="catalog-page">

//             {props.motos?.length > 0
//                 ? <h1>All Motos</h1>
//                 : <h3 className="no-articles">No articles yet</h3>
//             }

//             {props.motos.map(x => <CatalogItem key={x._id} moto={x} />)}


//             {user &&
//                 <button className="btn submit"><Link to={'/create'}>Add moto</Link></button>

//             }

//             <button className="btn submit"><Link to={'/'}>Back</Link></button>

//         </section>
//     );
// }

// export default Catalog;