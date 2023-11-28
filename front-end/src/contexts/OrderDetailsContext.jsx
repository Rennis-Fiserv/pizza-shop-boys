import { createContext,useState } from "react";

export const OrderDetailsContext = createContext();

export const OrderDetailsProvidor = ({children}) => {
    const [orderDetails, setOrderDetails] = useState([]);


function addToCart(item){
    console.log(item)
    setOrderDetails(orderDetails => [...orderDetails, item])
}

const removeFromCart = (index) => {
    const updated =orderDetails.splice(index,1)
    setOrderDetails(updated)
}

return(
    <OrderDetailsContext.Provider value={{orderDetails, addToCart, removeFromCart}}>
        {children}
    </OrderDetailsContext.Provider>
    )
}