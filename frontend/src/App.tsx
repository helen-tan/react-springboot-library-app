import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Carousel } from './layouts/Homepage/Carousel';
import { Heros } from './layouts/Homepage/Heros';
import { LibraryServices } from './layouts/Homepage/LibraryServices';

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel/>
      <Heros/>
      <LibraryServices/>
    </>
  );
}

export default App;
