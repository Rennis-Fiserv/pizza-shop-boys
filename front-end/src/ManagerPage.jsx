import { Outlet, Link, useNavigate } from "react-router-dom";

export default function ManagerPage(){
    const navigate = useNavigate();
    return (
        <>
        <button onClick={()=>navigate('orders')}>Start an Order</button>
        <button onClick={()=>navigate('employee-management')}>Employee Managment</button>
        <button onClick={()=>navigate('shop-metrics')}>Pizza Shop Statistics</button>
        <Outlet/>
        </>
        

    )
}