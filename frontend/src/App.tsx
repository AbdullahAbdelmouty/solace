import React from 'react';
import './App.css';
import {Routes, Route,Navigate} from "react-router-dom";
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Page1 from './Pages/Page1';
import BasicInfo from './Components/BasicInfo';
import BankInfo from './Components/BankInfo';
function App() {

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <NavBar/>
      <div className='col-span-11 p-4 bg-gray-100	'>
        <Header/>
        <Routes>
          <Route path='/' element={<Page1/>}>
           <Route index path="/" element={<BasicInfo/>}/>
           <Route path="bank-info" element={<BankInfo/>}/>
          </Route>
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
