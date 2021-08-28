import { React, useState, useEffect } from 'react';
import BeerCard from './BearCard/BeerCard';
import Pagination from './Pagination/Pagination';
import APIURL from 'API-URL';

function BeerContainer() {
    const [isLoaded, setLoad] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

  /* const [page, setPage] = useState(1);
 */
    const [per_page, setPerPage] = useState(5);
    const [q, setQ] = useState('');
    const [searchParam] = useState(["name"]);

    
    useEffect(() => {
        for (let i = 0; i < 4; i++){
        fetch(`${APIURL}beers?page=${i+1}&per_page=80`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoad(true);
                    setItems(items.concat(result));
                },
                (error) => {
                    setLoad(true);
                    setError(error);
                }
            );
    }
        
    }, []);

    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    function debounce(f, ms) {
        let isCooldown = false;

        return function() {
            if (isCooldown) return;
            f.apply(this, arguments);
            isCooldown = true;
            setTimeout(() => isCooldown = false, ms);
        };
    }
    
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
                    onChange={ (e) => debounce(setQ(e.target.value), 200) }
                />
                <br></br>

                <div className='wrapper'>
                    <Pagination
                        items={search(items)}
                        RenderComponent={BeerCard}
                        pageLimit={5}
                        itemsLimit={per_page}
                    />
                </div>

                
                <select onChange={ (e) => setPerPage(Number(e.target.value))}>
                    <option value="5">Display 5 per page</option>
                    <option value="10">Display 10 per page</option>
                    <option value="15">Display 15 per page</option>                    
                    <option value="20">Display 20 per page</option>
                    <option value="25">Display 25 per page</option>
                </select>
            </>
        )
    }
}

export default BeerContainer;