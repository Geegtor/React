import {React, useState, useEffect} from 'react';
import BeerCard from './BearCard/BeerCard';
import Pagination from './Pagination/Pagination';
import APIURL from 'API-URL';

function BeerContainer() {
  const [isLoaded, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [q, setQ] = useState('');


  function getURL() {
    return (
      !q ? `${APIURL}beers?page=${page}&per_page=${perPage}` :
        `${APIURL}beers?beer_name=${q}&page=${page}&per_page=${perPage}`
    );
  }

  useEffect(() => {
    fetch(getURL())
        .then((res) => res.json())
        .then(
            (result) => {
              setLoad(true);
              setItems(result);
            },
            (error) => {
              setLoad(true);
              setError(error);
            },
        );
    console.log('DATA CALCULATED = ', items,
        `${APIURL}beers?beer_name=${q}&page=${page}&per_page=${perPage}`);
  }, [page, perPage, q]);

 /*  const debounceFunction = (func, delay) => {
    let timer;
    return function() {
      const self = this;
      const args= arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(self, args);
      }, delay);
    };
  };
 */
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <input
          value={q}
          type='text'
          placeholder='search by beer name'
          onChange={(e) => setQ(e.target.value)}
        />
        <br></br>

        <div className='wrapper'>
          <Pagination
            items={items}
            RenderComponent={BeerCard}
            pageLimit={3}
            itemsLimit={perPage}
            setPage={setPage}
          />
        </div>


        <select onChange={(e) => setPerPage(Number(e.target.value))}>
          {[5, 10, 15, 20, 25].map((el) => <option key={el}
            value={+el}>
            Display {el} per page</option>)}
        </select>
      </>
    );
  }
}

export default BeerContainer;
