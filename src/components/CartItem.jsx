import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/CartItem.css';

const CartItem = ({ item, deleteCartById }) => {
    return (
        <article className="cart-item-card">
            <div className="cart-item__delete" onClick={() => deleteCartById(item.id)}>
                <FontAwesomeIcon icon={faTimes} color={'#1d1d1d'} size={'1x'} />
            </div>
            <div className="cart-item__img">
                <img src={item.thumbnail} />
            </div>
            <h2 className="cart-item__name">{item.name.match(/\b\w+\b/)[0]}</h2>
            <span className="cart-item__qty"><strong>Quantity:</strong> {item.qty}</span>
        </article>
    )
}

export default CartItem
