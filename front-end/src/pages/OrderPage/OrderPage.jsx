
import { OrderDetailsProvidor } from "../../contexts/OrderDetailsContext"
import Menu from "../../components/Menu/Menu"
import Cart from "../../components/Cart/Cart"

import './OrderPage.css'
import DeliveryDetailsAndOrderCompletion from "../../components/Form/DeliveryDetailsAndOrderCompletion"

export default function OrderPage(){    
    return(
        <>
        <OrderDetailsProvidor>
            <div className="orders-layout">
                
                <div className="orders-menu">
                <Menu />
                </div>

                <div className="cart-sidebar">
                <DeliveryDetailsAndOrderCompletion/>
                <Cart/>
                </div>
                
                
            </div>
        </OrderDetailsProvidor>    
        </>
    )
}