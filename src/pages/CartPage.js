import React from "react";
import CartListItem from "../components/CartListItem";

const CartPage = () => {
  return (
    <main className="display-page">
      <h1>Your Favourite items are: </h1>
      <CartListItem />
    </main>
  );
};

export default CartPage;
