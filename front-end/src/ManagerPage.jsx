import { Outlet, Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function ManagerPage(){
    const navigate = useNavigate();
    return (
        <>
        <Button variant="outlined" onClick={()=>navigate('orders')}>Start an Order</Button>
        <Button variant="outlined" onClick={()=>navigate('employee-management')}>Employee Managment</Button>
        <Button variant="outlined" onClick={()=>navigate('shop-metrics')}>Pizza Shop Statistics</Button>
        <Outlet/>
        </>
        

    )
}