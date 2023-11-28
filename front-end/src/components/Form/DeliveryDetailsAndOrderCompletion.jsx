import { useContext } from 'react'
import {Form, useForm} from 'react-hook-form'
import { OrderDetailsContext } from '../../contexts/OrderDetailsContext'





export default function DeliveryDetailsAndOrderCompletion(){
    const {register, handleSubmit, watch, setValue} = useForm()
    const {orderDetails} = useContext(OrderDetailsContext)
    const completeOrder = (data) => {
        data['orderDetails'] = orderDetails
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(completeOrder)}>
            <fieldset><legend>Delivery Info</legend>

            <label>
                <input id ="zip" type="number" {...register("zip")}/>
                 zip
            </label>

            <label><input type="text" {...register("streetAddress")} />Adress</label>
            </fieldset>

            <fieldset><legend>Customer Info</legend>
            <label><input type="text" {...register("firstName")}/>First Name</label>
            <label><input type="text" {...register("lastName")}/>Last Name</label>
            <label><input type="text" {...register("phone")}/>Phone #</label>
            </fieldset>
            <button type='submit'>Submit Order</button>
        </form>
    )
}