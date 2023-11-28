import { Link, Outlet, useNavigate } from "react-router-dom";
import "./EmployeePage.css"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "@mui/material/Button";
export default function EmployeePage(){
    const navigate = useNavigate()
    const {user, logoutUser} = useContext(UserContext)
    return(
        <>
        <div className="employee-navigation">
        <div className="employee-info">
        <h2>{user['firstName']} {user['lastName']} </h2>
        <Button className="heys" onClick={()=>navigate('orders')}>Start an Order</Button>
        <Button className="heys" onClick={()=>navigate('/')}>Logout</Button>
        </div>
        </div>

        <Outlet/>
        </>
    )
}