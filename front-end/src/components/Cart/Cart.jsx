import { useContext } from "react"
import Product from "../Product/Product"
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext"

export default function Cart(){
    const {orderDetails, addToCart, removeFromCart} = useContext(OrderDetailsContext)
    return(
        <>
        <h3>Order Details</h3>
        {orderDetails.length > 0 && orderDetails.map((item,index)=>{return(
 
        <Product key={index} index={index} {...item}/> 
    
        )})}

        {orderDetails.length === 0 && <p>No items in order</p>}

        </>
    )
}
