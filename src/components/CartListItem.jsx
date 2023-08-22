import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

import './styles/CartListItem.css'

const CartListItem = () => {

    const cartContext = useContext(CartContext);
    const { cart, deleteCartById, deleteCart } = cartContext;

    return (
        <section className="list-cart-container">
            {cart ? (cart.map(product => {
                return (<CartItem key={product.id}
                    item={product}
                    deleteCartById={deleteCartById}
                />);
            }))
                : <p>Loading Products</p>
            }
            {cart.length === 0 && <p>No products found in the cart</p>
            }
        </section>
    )
}

export default CartListItem
