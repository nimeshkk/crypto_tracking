import './App.css';
import React from 'react';
import SignUp from './component/signup'; 
import SignIn from './component/login';
import SearchCoin from './component/searchCoin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/navbar';
import Details from './component/CRUD/detailsEnter';
import Add from './component/CRUD/add';
import Update from './component/CRUD/update';



function App() {
  return(
  <div>
    
    <NavBar/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/searchCoin" element={<SearchCoin />} />
          <Route path="/detailsEnter" element={<Details />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
   
    {/* <SearchCoin/> */}


  </div>
  );
   
      
}

export default App;
