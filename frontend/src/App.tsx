import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Navigate, Route, Routes } from 'react-router';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';


export const App = () => {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'> {/* Sticky Footer */}
        <Navbar />

        <div className='flex-grow-1'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> {/*Redirect to homepage for this route*/}
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
