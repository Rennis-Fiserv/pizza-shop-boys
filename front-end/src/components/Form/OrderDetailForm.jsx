import { useContext, useState } from "react";
import './OrderDetailForm.css'
import {useForm} from 'react-hook-form'
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext";
export default function OrderDetailForm({variants, category}){
    
    const {register, handleSubmit, watch, setValue} = useForm()
    const {orderDetails, addToCart} = useContext(OrderDetailsContext)
    const [selectedItems, setSelectedItems] = useState([]);
    const [availableSizes, setAvailableSizes] = useState();
    const selectedItem = watch("itemName")
    const selectedSize = watch("itemSize")
    const quantity = watch('quantity')
    const [index, setindex] = useState(null);
    
    const onSubmit = (data) => {
        const newItem = {
            name: selectedItem,
            size: selectedSize,
            quantity: quantity,
            price: variants[index]['prices'][selectedSize]
        }


        addToCart(newItem)
        setValue('itemName','')
        setValue('itemSize','')
        setValue('quantity', 1)
    }

    const handleItemChange = (selectedItem,index) => {
        setValue('itemName', selectedItem)
        setValue('itemSize', '')
        setindex(index)
    }
     
    return(
        <>
        <h1>{category}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Item Names</legend>
                {variants.map((variant,index) => (
                    <label key={variant.name}>
                    <input type="radio"
                    value={variant.name}
                    {...register('itemName')}
                    onChange={()=>handleItemChange(variant.name,index)}
                    />
                    {variant.name}
                    </label>
                ))}
            </fieldset>
            {selectedItem && index != null &&  (
                <fieldset>
                    <legend>Item Sizes</legend>
                    {variants[index].sizes.map((size)=>(
                        <label key={size}>
                            <input type="radio" value={size} {...register('itemSize')} />
                            {size}
                        </label>
                    ))}
                </fieldset>
            )}

                <div>
                    <label>
                        Quantity: 
                        <input type="number" {...register('quantity')} defaultValue={1} min={1} />
                    </label>
                </div>
                
                {selectedItem && selectedSize && (<div>
                  <p> Price {quantity * variants[index]['prices'][selectedSize]}</p>
                </div>)}
            <div>
                <button type="submit">Add to Cart</button>
            </div>
        </form>
        </>

    )
}