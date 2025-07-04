import React from 'react';
import "../assets/css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = basket.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Subtotal ({basket?.length} items): <strong>{value}</strong></p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={() => alert('Thanks for shopping!')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
