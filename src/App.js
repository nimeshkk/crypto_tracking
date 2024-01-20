import './App.css';
import React from 'react';
import SignUp from './component/signup'; 
import SignIn from './component/login';
import SearchCoin from './component/searchCoin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './component/CRUD/detailsEnter';
import Add from './component/CRUD/add';
import Update from './component/CRUD/update';
import Home from './component/home';
import Crud_home from './component/CRUD/crud_home';



function App() {
  return(
  <div>
    
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/crud_home" element={<Crud_home/>} />
          <Route path="/searchCoin" element={<SearchCoin />} />
          <Route path="/detailsEnter" element={<Details />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
   


  </div>
  );
   
      
}

export default App;
