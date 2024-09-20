import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./component/Header";
import { LoginPage } from "./component/LoginPage";
import { Register } from './component/Register';
import { Footer } from './component/Footer';
import { ProductList } from './component/ProductCard';
import { AdminPanel } from './component/AdminPanel';
import {Profile} from './component/Profile';
import '../src/App.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
