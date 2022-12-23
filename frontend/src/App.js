import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import OrderDetail from "./pages/orderhistory/OrderDetail";
import OrderHistory from "./pages/orderhistory/OrderHistory";
import ProductDetail from "./pages/productDetail/ProductDetail";
//! page 들이 많이 질것 같아서 이런방법으로 하면  import 부분이 조금더  간결해 집니다.
import { Header, Footer } from "./components/";
import { Blouse, Pants, Dress, Cart, Login } from "./pages/";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/blouse" element={<Blouse />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
