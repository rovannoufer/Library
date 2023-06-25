import React, { useEffect, useState } from 'react';
import SignUpPage from './Component/Signup';
import LoginForm from './Component/Login';
import { Routes, Route } from "react-router-dom";
// import { Container,Row,Col } from 'react-bootstrap';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import Header from './Component/Header';
import ProtectedRoute from './Component/ProtectedRoute';
import Writer from './Component/Writer';
import Searchbar from './Component/JS/search';



function App() {
  
 
  return (
    <>
        <UserAuthContextProvider>
       <Routes>
          <Route path="/header" element={<ProtectedRoute>
           <Header />
          </ProtectedRoute> } />
          <Route path='/books' element={<Searchbar/>} />
           <Route path="/" element={<LoginForm /> } />
           <Route path="/signup" element={<SignUpPage /> } />
           <Route path="/writer" element={<Writer/>} />
          
         </Routes>
       </UserAuthContextProvider>
       
       
    </>
     
               
  );
}

export default App;
