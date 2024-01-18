import './App.css';
import React from 'react';
import SignUp from './component/signup'; 
import SignIn from './component/login';
import SearchCoin from './component/searchCoin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/navbar';


function App() {
  return(
  <div>
    
    {/* <NavBar/> */}
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </BrowserRouter>
   
    
    {/* <SearchCoin/> */}


  </div>
  );
   
      
}

export default App;
