export default function Product({name, size, price , quantity}){
    return(
        <>
        <div>
            <p>Name: {name}-{size}</p>
            <p>Price: ${price}</p>
            <p>quantity {quantity}</p>
        </div>
        </>
    )
}