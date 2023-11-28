import { useContext } from "react";
import "./Product.css";
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext";
import Button from "@mui/material/Button";
export default function Product({ name, serving, price, quantity, index }) {
  const { removeFromCart } = useContext(OrderDetailsContext);
  return (
    <>
      <div className="cart-item">
        <p className="cart-item-header">
          {name} ({serving})
        </p>
        <p className="cart-item-price">${price} </p>
        <p className="cart-item-quanity">{quantity}</p>
        <Button
          variant="contained"
          size="large"
          color="inherit"
          className="remove"
          onClick={() => removeFromCart(index)}
        >
          remove
        </Button>
      </div>
    </>
  );
}
