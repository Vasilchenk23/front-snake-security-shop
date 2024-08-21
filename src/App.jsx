import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./component/Header";
import { LoginPage } from "./component/LoginPage";
import '../src/App.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* Добавьте другие маршруты здесь */}
      </Routes>
    </Router>
  );
}

export default App;
