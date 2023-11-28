import { useContext } from "react"
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext"
import Button from "@mui/material/Button";
import "./RemoveFromCartButton.css";

export default function RemoveFromCartButton({item}){
    const {removeFromCart} = useContext(OrderDetailsContext)
    return (
        <Button 
        variant="contained"
        size="large"
        color="inherit"
        className="remove"
        onClick={()=>removeFromCart(item)}>Remove</Button>
    )
}