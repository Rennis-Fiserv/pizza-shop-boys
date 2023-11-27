import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from "react-router-dom"
import EmployeePage from "../pages/EmployeePage/EmployeePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ManagerPage from "../ManagerPage"
import RootLayout from "../pages/RootLayout"
import EmployeeManagementPage from "../pages/EmployeeMangementPage/EmployeeMangementPage"
import PizzaShopStatsPage from "../pages/PizzaShopStatsPage/PizzaShopStatsPage"

const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>

        <Route index element={<LoginPage/>}></Route>
        
        <Route path="employee" element={<EmployeePage/>}>
        <Route path="orders" element={<p>orders</p>}></Route>
        </Route>
        
        <Route path="manager" element={<ManagerPage/>}>

            <Route path="orders" element={<p>orders</p>}></Route>
            <Route path="employee-management" element={<EmployeeManagementPage/>}></Route>
            <Route path="shop-metrics" element={<PizzaShopStatsPage/>}></Route>
            
        
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