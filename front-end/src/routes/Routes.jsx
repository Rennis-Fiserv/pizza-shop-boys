import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route,} from "react-router-dom"
import EmployeePage from "../pages/EmployeePage/EmployeePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ManagerPage from "../ManagerPage"
import RootLayout from "../pages/RootLayout"
import OrderPage from "../pages/OrderPage/OrderPage"
import { productsLoader } from "../util/requests/productsLoader"



const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>

        <Route index element={<LoginPage/>}></Route>
        
        <Route path="employee" element={<EmployeePage/>}>
        <Route path="orders" element={<OrderPage/>} loader={productsLoader}></Route>
        </Route>
        
        <Route path="manager" element={<ManagerPage/>}>

            <Route path="orders" element={<OrderPage/>}></Route>
            <Route path="employee-management" element={<p>employee-management</p>}></Route>
            <Route path="shop-metrics" element={<p>employee-metrics</p>}></Route>
        
        
        </Route> 
        </Route>
    )
)

export default function Routes (){
    return(
       <>
       <RouterProvider router={routes}/>
       </>
    )
}