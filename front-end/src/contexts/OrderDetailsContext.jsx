import { createContext,useState } from "react";

export const OrderDetailsContext = createContext();

export const OrderDetailsProvidor = ({children}) => {
    const [orderDetails, setOrderDetails] = useState([]);


function addToCart(item){
   
    setOrderDetails(orderDetails => [...orderDetails, item])
}

const removeFromCart = (index) => {
    setOrderDetails(orderDetails => orderDetails.filter((order, i) => (i != index)))
}

return(
    <OrderDetailsContext.Provider value={{orderDetails, addToCart, removeFromCart}}>
        {children}
    </OrderDetailsContext.Provider>
    )
}