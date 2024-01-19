//Imports
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ProductInfo from './data/ProductInfo.js';

//Pages and components
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js'
import TopicsPage from './pages/TopicsPage.js'
import GalleryPage from './pages/GalleryPage.js';
import BoardGamePage from './pages/BoardGamePage.js';
import CreateGamePage from './pages/CreateGamePage.js';
import EditGamePage from './pages/EditGamePage.js';
import OrderPage from './pages/OrderPage.js';
import StaffPage from './pages/StaffPage.js';

//Style
import './App.css';

function App() {
  const [boardGame, setBoardGameToEdit] = useState([])

  return (
    
    <BrowserRouter>
      <header>
        <h1>Steven Crowther – Web Development Concepts in Action</h1>
      </header>
      
      <Nav />

      <main>
        <section>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/boardgames" element={<BoardGamePage setBoardGame={setBoardGameToEdit} />} />
            <Route path="/create" element={<CreateGamePage />} />
            <Route path="/edit" element={<EditGamePage game={boardGame} />} />
            <Route path="/order" element={<OrderPage items={ProductInfo}/>} />
            <Route path="/staff" element={<StaffPage />} />
          </Routes>
        </section>
      </main>

      <footer>
        <p><cite>&copy; 2023 Steven Crowther</cite></p>
      </footer>


    </BrowserRouter>
    
  );
}

export default App;
