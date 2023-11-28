import { useContext, useState } from "react";
import "./OrderDetailForm.css";
import { useForm } from "react-hook-form";
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext";
import Button from "@mui/material/Button";

export default function OrderDetailForm({ product, category }) {
  const { register, handleSubmit, watch, setValue } = useForm();
  const { orderDetails, addToCart } = useContext(OrderDetailsContext);
  const selectedSize = watch("itemSize");
  const quantity = watch("quantity");

  const onSubmit = (data) => {
    const newItem = {
      productId: product.id,
      name: product.name,
      serving: selectedSize,
      quantity: quantity,
      price: product.prices[selectedSize],
      subtotal: product.prices[selectedSize] * quantity,
    };

    addToCart(newItem);
    setValue("itemSize", "");
    setValue("quantity", 1);
  };

  const changeLabelDisplay = (data) => {};

  return (
    <>
      <h1>
        {category} - {product.name}
      </h1>
      <form className="order-detail-form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <span>Size</span>
          <div className="input-options">
            {product.sizes.map((size) => (
              <label
                className={
                  selectedSize === size
                    ? "input-option selected"
                    : "input-option"
                }
                key={size}
              >
                <input type="radio" value={size} {...register("itemSize")} />
                {size}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="order-detail-form-add-to-cart">
          <label>
            Quantity
            <input
              className="order-detail-form-quantity"
              type="number"
              {...register("quantity")}
              defaultValue={1}
              min={1}
              max={99}
            />
          </label>

          <Button
            variant="contained"
            size="large"
            color="inherit"
            className="btn"
            type="submit"
          >
            Add to Cart
          </Button>
        </div>
      </form>
    </>
  );
}
