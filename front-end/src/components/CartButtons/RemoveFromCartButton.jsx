import { useContext } from "react"
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext"

export default function RemoveFromCartButton({item}){
    const {removeFromCart} = useContext(OrderDetailsContext)
    return (
        <button onClick={()=>removeFromCart(item)}>Remove</button>
    )
}