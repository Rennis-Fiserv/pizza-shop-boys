export default function Product({name, price , serving }){
    return(
        <>
        <div>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Serving: {serving}</p>
        </div>
        </>
    )
}