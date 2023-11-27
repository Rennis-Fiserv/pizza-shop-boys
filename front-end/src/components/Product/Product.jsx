import { useContext } from 'react'
import './Product.css'
import { OrderDetailsContext } from '../../contexts/OrderDetailsContext'
export default function Product({name, size, price , quantity,index}){
    const {removeFromCart} = useContext(OrderDetailsContext)
    return(
        <>
        <div className="cart-item">
            <p className='cart-item-header'>{name} ({size})</p>
            <p className='cart-item-price'>${price} </p>
            <p className='cart-item-quanity'>{quantity}</p>
            <button className='cart-item-remove' onClick={()=> removeFromCart(index)}>remove</button>
        </div>
        </>
    )
}