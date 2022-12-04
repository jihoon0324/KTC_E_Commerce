import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OrderHistory from "./pages/orderhistory/OrderHistory";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
