import { useNavigate } from 'react-router-dom';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Navigate, Route, Routes } from 'react-router';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth } from '@okta/okta-auth-js';
import { Security, LoginCallback } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const navigate = useNavigate();

  const customAuthHandler = () => {
    navigate('/login');
  }

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate(originalUri || "/", { replace: true })
  }

  return (

    <div className='d-flex flex-column min-vh-100'> {/* Sticky Footer */}
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler} >
        <Navbar />

        <div className='flex-grow-1'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> {/*Redirect to homepage for this route*/}
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
            <Route path="/login" element={<LoginWidget config={oktaConfig} />} />
            <Route path="/login/callback" element={<LoginCallback />} />
          </Routes>
        </div>

        <Footer />
      </Security>
    </div>

  );
}
