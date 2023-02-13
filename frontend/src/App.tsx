import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Carousel } from './layouts/Homepage/Carousel';
import { Heros } from './layouts/Homepage/Heros';

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel/>
      <Heros/>
    </>
  );
}

export default App;
