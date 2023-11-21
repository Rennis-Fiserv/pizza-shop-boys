import { useContext, useRef } from "react"
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext"

export default function AddToCartButton({item}){
    const  {addToCart} = useContext(OrderDetailsContext)
    let quantityRef = useRef()
    return(
        <>
        <input onChange={(e)=>quantityRef.current = e.target.value} type="number" />
        <button onClick={()=>addToCart(item,quantityRef.current)}>Add</button>
        </>
    )
}