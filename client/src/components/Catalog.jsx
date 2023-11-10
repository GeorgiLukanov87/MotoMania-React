import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

import SearchBar from './SearchBar';
import CatalogItem from './CatalogItem';

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