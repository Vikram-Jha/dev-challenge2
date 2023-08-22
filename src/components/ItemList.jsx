import React, { useEffect, useState } from 'react';
import Item from './Item';
import { fetchBeerData } from '../helpers/getData.js';

import './styles/ItemList.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchBeerData().then(data => {
      console.log(data);
      setProducts(data);
    });
  }, [products]);

  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  name={product.name.match(/\b\w+\b/)[0]}
                  thumbnail={product.image_path}
                  id={product.id}
                />
              </div>
            );
          })}
        </>
      ) : (
        <img className="load-beer" src={"https://media3.giphy.com/media/2kSfEOhJJApaYXsRJ7/giphy.gif?cid=ecf05e478wmerfim14hkh2ftgt8a2tlxlgtq0266hooh25q3&rid=giphy.gif&ct=g"} />
      )}
    </div>
  );
};

export default ItemList;
