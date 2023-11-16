import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeInfo from './EmployeeInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/employees' exact={true} element={<EmployeeInfo/>}/>
      </Routes>
    </Router>
  )
}

export default App;