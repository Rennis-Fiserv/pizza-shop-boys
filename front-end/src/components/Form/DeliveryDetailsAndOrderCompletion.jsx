import { useContext } from 'react'
import {Form, useForm} from 'react-hook-form'
import { OrderDetailsContext } from '../../contexts/OrderDetailsContext'

import './DeliveryDetailsAndOrderCompletion.css'



export default function DeliveryDetailsAndOrderCompletion(){
    const {register, handleSubmit, watch, setValue} = useForm()
    const {orderDetails} = useContext(OrderDetailsContext)
    const completeOrder = (data) => {
        data['orderDetails'] = orderDetails
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(completeOrder)}>
            <div className='order-submit'>
                <h2>Order Form</h2>
            <button id='order-submit' className='btn' type='submit'>Submit Order</button>
            </div>

            <h3>Customer Info</h3>
            <div className='order-form-section'>
            

            <div className='order-deatils-input-label'>
            <label htmlFor='first-name'>First Name</label>
            <input id="first-name" type="text" {...register("firstName")}/>
            </div>

            <div className='order-deatils-input-label'>
            <label htmlFor='last-name'>Last Name</label>
            <input id='last-name' type="text" {...register("lastName")}/>
            </div>

            <div className='order-deatils-input-label'>
            <label htmlFor='phone'>Phone </label>
            <input id='phone' type="text" {...register("phone")}/>
            </div>
            </div>

            <h3>Delivery Info</h3>
            <div className='order-form-section'>

            <div className='order-deatils-input-label'>
            <label htmlFor='zip'>Zip</label>
            <input id ="zip" type="number" {...register("zip")}/>
            </div>    
            
            <div className='order-deatils-input-label'>
            <label htmlFor='address'>Address</label>
            <input id='address' type="text" {...register("streetAddress")} />
            </div>
            </div>
            
        </form>
    )
}