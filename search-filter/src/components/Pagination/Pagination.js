import { React, useState } from 'react';
import './Pagination.css';

function Pagination({ items, RenderComponent, key, pageLimit, itemsLimit }) {
  const [pages] = useState(Math.round(items.length / itemsLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
      setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
      setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
      const pageNumber = Number(event.target.textContent);
      setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * itemsLimit - itemsLimit;
    const endIndex = startIndex + itemsLimit;
    return items.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
      <>
            <div className="dataContainer">
                {getPaginatedData().map((item) => (
                <RenderComponent key={item.id} item={item} />
                ))}
            </div>

           <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {getPaginationGroup().map((item, index) => (
                    <button
                    key={index}
                    onClick={changePage}
                    className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                    <span>{item}</span>
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
      </>
  )
}

export default Pagination;