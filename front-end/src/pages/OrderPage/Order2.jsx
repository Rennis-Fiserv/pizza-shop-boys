import { useContext } from "react"
import { OrderDetailsProvidor } from "../../contexts/OrderDetailsContext"
import Menu from "../../components/Menu/Menu"
import Cart from "../../components/Cart/Cart"

import './Order2.css'

export default function Order2(){

   let mockAPIProducts = [
        {
            id:1,
            name:'pizza S',
            price: 5.00,
            serving: '12 in' 
        },
        {
            id:2,
            name:'pizza M',
            price: 10.00,
            serving: '14 in' 
        },
        {
            id:3,
            name:'pizza L',
            price: 15.00,
            serving: '16 in' 
        }
    
    ]
    
    return(
        <>
        <OrderDetailsProvidor>
            <div className="orders-layout">
                
                <div className="orders-menu">
                <Menu />
                </div>

                <div className="cart-sidebar">
                <Cart/>
                </div>
                
            </div>
        </OrderDetailsProvidor>    
        </>
    )
}