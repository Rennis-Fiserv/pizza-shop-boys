import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeInfo from './components/EmployeeInfo';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeAdd from './components/EmployeeAdd';
import PizzaShopAdmin from './components/PizzaShopAdmin';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/pizzashopadmin' element={<PizzaShopAdmin/>}/>
        <Route path='/employees' exact={true} element={<EmployeeInfo/>}/>
        <Route path='/employees/:id' exact={true} element={<EmployeeEdit/>}/>
        <Route path='/employees/new' element={<EmployeeAdd/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Router>
  )
}

export default App;