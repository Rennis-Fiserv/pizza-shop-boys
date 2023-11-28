import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import OrderDetailForm from "../Form/OrderDetailForm";
import './Menu.css'
import { useLoaderData } from "react-router-dom";
export default function Menu(){
    const menu = useLoaderData()
    console.log(menu)

return(
    menu.map((categoryListOfProducts,index)=>{
        return (
            <>
            <h1 className="menu-category-header">{categoryListOfProducts["category"]}</h1>

            <div key={`yo-${index}`} className="menu-products-in-category-container">
            {categoryListOfProducts["products"].map((product)=>{
                return(
                    
                    <div className="product-card">
                        <Modal dialogContent={<OrderDetailForm category={categoryListOfProducts["category"]} product={product}/>}>
                    <div className="product-info">
                    <p className="product-name">{product['name']}</p>
                    <p className="'product-price">${Math.min(...Object.values(product['prices']))}
                    {product['sizes'].length > 1 && '+'}
                    </p>
                    </div>
                    </Modal>
                    </div>
                    
                )
            })}
            </div>
            </>
        )
    })
)    
    
}
