import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Navigate, Route, Routes } from 'react-router';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} /> {/*Redirect to homepage for this route*/}
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchBooksPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
