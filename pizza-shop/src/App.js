import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeInfo from './EmployeeInfo';
import EmployeeEdit from './EmployeeEdit';
import EmployeeAdd from './EmployeeAdd';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/employees' exact={true} element={<EmployeeInfo/>}/>
        <Route path='/employees/:id' exact={true} element={<EmployeeEdit/>}/>
        <Route path='/employees/new' element={<EmployeeAdd/>}/>
      </Routes>
    </Router>
  )
}

export default App;