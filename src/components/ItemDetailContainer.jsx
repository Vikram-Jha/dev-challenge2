import React, { useEffect, useState } from 'react';
import { getBeerDataById } from '../helpers/getData.js';
import ItemDetail from './ItemDetail';
import './styles/ItemDetailContainer.css';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = getBeerDataById(id);
    console.log(data);
    setProduct(data);
  }, []);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obtaining product...</p>}
    </section>
  );
};

export default ItemDetailContainer;
