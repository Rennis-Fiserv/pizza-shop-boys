import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import OrderDetailForm from "../Form/OrderDetailForm";
import './Menu.css'
export default function Menu(){
    
    let productsGroupedByCategetory = [
        
            {category: "pizza",
            image:"image",
            products:[
                {name: 'pepporni',
                sizes: ['s','m', 'l'],
                prices: {'s': 3.00, 'm': 5.00, 'l':10.00}
                },
                {name: 'house',
                sizes: ['s','m', 'l','xl'],
                prices: {'s': 4.00, 'm': 7.00, 'l':12.00}
                }                 
            ]}
            ,
            {
            category: "beverage",
            image:"image",
            products:[
                {name: 'soda',
                sizes: ['1 can'],
                prices: {'1 can': 2.50}}
            ]},
            {
            category: "sides",
            image:"image",
            products:[
                {name: 'breadsticks',
                 sizes: ['8 pc'],
                 prices: {'8 pc': 2.00
                }
            },
            ]}
    ]
    

    
    
return(
    <>
    { productsGroupedByCategetory.map((category,index) => {
        return(
            <Card key={`${category}-${index}`} className="menu-boxes"><Modal key={`modal-${category}`} dialogContent={<OrderDetailForm key={`order-details-${category}`} variants={category.products} category={category.category}/>}>
                    <h2>{category.category}</h2>
            </Modal></Card>
            
            )}
    )}
    </>
)
}
        
