import { useContext } from "react"
import Product from "../Product/Product"
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext"

export default function Cart(){
    const {orderDetails, addToCart, removeFromCart} = useContext(OrderDetailsContext)
    return(
        <>
        {orderDetails.map((item,index)=>{return(
 
        <Product key={index} {...item}/> 
    
        )})}

        </>
    )
}
