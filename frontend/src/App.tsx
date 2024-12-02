import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route,Navigate} from "react-router-dom";
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Page1 from './Pages/Page1';
function App() {

  return (
    <div className="grid grid-cols-12">
      <NavBar/>
      <div className='col-span-11 p-4 bg-gray-100	'>
        <Header/>
        <Routes>
          <Route path='/' element={<Page1/>}/>
          <Route path='/page2' element={<h1>page2</h1>}/>
          <Route path='/page3' element={<h1>page3</h1>}/>
          <Route path='/page4' element={<h1>page4</h1>}/>
          <Route path='/page5' element={<h1>page5</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
