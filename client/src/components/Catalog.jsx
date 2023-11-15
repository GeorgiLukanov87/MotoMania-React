import styles from '../components/Catalog.module.css';

import React, { useContext, useState } from 'react';
import SearchBar from './SearchBar';
import CatalogItem from './CatalogItem';

import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Catalog = ({ motos }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useContext(AuthContext);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const allMotos = motos.filter(
    (moto) =>
      moto.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      moto.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(allMotos.length / itemsPerPage);

  const paginatedMotos = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allMotos.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section id="catalog-page">

        <video controls autoPlay muted loop>
          <source src="videos/THE RED WOODS _ Ducati Panigale V4s (feat. MOTORBIKEMEDIA).mp4" type="video/mp4" />
        </video>

      <SearchBar onSearch={handleSearch} />
      <h1>Available Motorcycles</h1>

      {paginatedMotos().length > 0 ? (
        <div>
          {paginatedMotos().map((moto) => (
            <CatalogItem key={moto._id} moto={moto} />
          ))}
        </div>
      ) : (
        <h3 className="no-articles">No matching articles</h3>
      )}

      {totalPages > 1 && (
        <div className="catalogPagination">

          <button className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className={styles.pagesPagination}>{`Page ${currentPage} of ${totalPages}`}</span>

          <button className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>
      )}

      {user.email && (
        <button className="btn submit">
          <Link to={'/create'}>Add moto</Link>
        </button>
      )}

      <button className="btn submit">
        <Link to={'/'}>Back</Link>
      </button>

    </section>
  );
};

export default Catalog;