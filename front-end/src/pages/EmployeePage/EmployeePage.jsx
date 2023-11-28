import { Link, Outlet, useNavigate } from "react-router-dom";
import "./EmployeePage.css"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
export default function EmployeePage(){
    const navigate = useNavigate()
    const {user, logoutUser} = useContext(UserContext)
    return(
        <>
        <div className="employee-navigation">
        <div className="employee-info">
        <h2>{user['firstName']} {user['lastName']} </h2>
        <button className="btn" onClick={()=>navigate('/')}>Logout</button>
        </div>

        <div className="employee-options">
        <button className="btn" onClick={()=>navigate('orders')}>Start an Order</button>
        </div>

        </div>

        <Outlet/>
        </>
    )
}