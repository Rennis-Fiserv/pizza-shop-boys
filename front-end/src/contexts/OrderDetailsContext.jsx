import { createContext,useState } from "react";

export const OrderDetailsContext = createContext();

export const OrderDetailsProvidor = ({children}) => {
    const [orderDetails, setOrderDetails] = useState([]);


function addToCart(item, quantity){
    removeFromCart(item)

    console.log(item, quantity)
    item['quantity'] = quantity
    setOrderDetails(orderDetails => [...orderDetails, item])
}

const removeFromCart = (item) => {
    setOrderDetails(orderDetails.filter(( inCartItem => inCartItem.id != item.id)))
}

return(
    <OrderDetailsContext.Provider value={{orderDetails, addToCart, removeFromCart}}>
        {children}
    </OrderDetailsContext.Provider>
    )
}