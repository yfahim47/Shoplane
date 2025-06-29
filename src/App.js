import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Product from './components/Product';



function App() {

  return (
    <Router>
      <Header />
      {/* <Wallpaper /> */}
      <Routes>
        <Route exact path='/' Component={Container} />
        <Route path='/Product/:id/:name' Component={Product} />
      </Routes>
    </Router>
  );
}

export default App;
