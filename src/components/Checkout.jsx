import React from 'react';
import "../assets/css/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://miro.medium.com/max/700/1*rgSRBz1tpXptQcQZqOmdwA.gif"
            alt="Ad Banner"
          />

          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              basket.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            )}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
