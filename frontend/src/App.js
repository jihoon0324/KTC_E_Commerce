import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import OrderDetail from './pages/orderhistory/OrderDetail';

import OrderHistory from './pages/orderhistory/OrderHistory';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/orderhistory' element={<OrderHistory />} />
          <Route path='/orderDetail' element={<OrderDetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
