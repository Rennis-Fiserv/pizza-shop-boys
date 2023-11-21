import { useRef, useState } from "react"
import Product from "../../components/Product/Product"
import { useFieldArray, useForm } from "react-hook-form"
import { createBrowserRouter } from "react-router-dom"

export default function OrderPage(){
let quantityRef = useRef()
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        control
      } = useForm(
        {
            defaultValues: {
              firstName: "",
              lastName: "",
              productDetails:[]
            }
          }
      )
      const {fields, append, remove}  = useFieldArray({control, name: "value"})

    const [cart, setCart] = useState([])
    

    
    function addToCart(item,quantity){
        removeFromCart(item)
        item['quantity'] = quantity
        setCart(cart => [...cart, item]) 
    }
    function removeFromCart(item){
        setCart(cart.filter(( a => a.id != item.id)))
        console.log(cart)
    }

    const [products, setProducts] = useState([
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

])


    function customerOrderFormHandler(data){
        console.log(data)
    }
    
    return(

<>
    {products.map((product, index) => {

        return(
            <>
            
            <Product {...product}/>
            <input onChange={(e)=>quantityRef.current = e.target.value} type="number" />
            <button onClick={()=>addToCart(product,quantityRef.current)}>Add</button>
            <button onClick={()=>removeFromCart(product)}>Remove</button>
            </>
        )
    } ) 
    }



    <h1>Order Details</h1>
   
    {cart.map((item,index)=>{
        return(
        <>
        <p>Name :{item.name}</p>
        <p>Qnt :{item.quantity}</p>
        <p>price: ${item.price}</p>
        <p>subtotal: ${item.price * item.quantity}</p>
        </>
        )
    })
    
    }


    {/* <form onSubmit={handleSubmit(customerOrderFormHandler)}> */}
        


                                
                                
        


        {/* <label htmlFor="">f name</label>
        <input id="customer-order-zip" type="text" placeholder="john" {...register("firstName", {required: true})} />
        

        <label htmlFor="">l name</label>
        <input id="customer-order-zip" type="text" placeholder="doe" {...register("lastName", {required: true})}/>
       

        <label htmlFor="">phone</label>
        <input id="customer-order-zip" type="text" placeholder="555-555-5555" {...register("lastName", {required: true})}/>
        

        <label htmlFor="">street</label>
        <input id="customer-order-zip" type="text" placeholder="123 w main st." {...register("streed", {required: true})}/>

        <label htmlFor="customer-order-zip">zip</label>
        <input id="customer-order-zip" type="number" placeholder="12345" {...register("zip", {required: true})}/> */}

        {/* <input type="submit" value="Submit Order"/>
    </form> */}

{/* </div> */}
</>
    )
}