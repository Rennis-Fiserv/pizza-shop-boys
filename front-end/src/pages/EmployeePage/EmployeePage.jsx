import { Link, Outlet, useNavigate } from "react-router-dom";

export default function EmployeePage(){
    const navigate = useNavigate()
    return(
        <>
        <button onClick={()=>navigate('orders')}>Start an Order</button>
        <Outlet/>
        </>
    )
}