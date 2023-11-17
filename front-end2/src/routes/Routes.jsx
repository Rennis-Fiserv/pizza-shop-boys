import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import ManagerPage from "../pages/ManagerPage/ManagerPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import EmployeePage from "../pages/EmployeePage/EmployeePage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index path='/' element={<LoginPage/>}>
      <Route path='employee' element={<EmployeePage/>}></Route>
      <Route path='manager' element={<ManagerPage/>}></Route>
    </Route>
  )
)

export const Routes = () => {
    return(
      <RouterProvider router={router}/>
        )
}