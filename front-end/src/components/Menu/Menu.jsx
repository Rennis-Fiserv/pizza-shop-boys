import { useContext, useRef, useState } from "react";
import Product from "../Product/Product";
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext";
import AddToCartButton from "../CartButtons/AddToCartButton";
import RemoveFromCartButton from "../CartButtons/RemoveFromCartButton";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

export default function Menu(){
    
    const {orderDetails, addToCart, removeFromCart} = useContext(OrderDetailsContext)
    let items = [
        
            {category: "pizza",
            image:"image",
            products:[
                {name: 'pepporoni',
                 size: 'S',
                 price: 10.00},
                 {name: 'pepporoni',
                 size: 'M',
                 price: 10.00},

                 {name: 'pepporoni',
                 size: 'L',
                 price: 10.00}
            ]},
            {
            category: "soda",
            image:"image",
            products:[
                {name: 'soda',
                 size: '1 can',
                 price: 2.00},
            ]},
            {
            category: "breadsticks",
            image:"image",
            products:[
                {name: 'soda',
                 size: '1 can',
                 price: 2.00},
            ]}
    ]
    

    
    
return(
    <>
    { items.map((category) => {
        return(<>
            <Card><Modal>
                    <p>{category.category}</p>
                    <p>{category.image}</p>
            </Modal></Card>
            </>
            )}
    )}
    </>
)
}
        
{/* <Product {...item} />
      <AddToCartButton item={item} />
      <RemoveFromCartButton item={item}/> */}