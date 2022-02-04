import React, { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import HomePage from "./pages/Home";
import AddProductToCatalogPage from "./pages/AddProductToCatalog";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";


function RequireAuth({ children }) {

  let location = useLocation();


  if (!localStorage.getItem('store_id')) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Routes>
          <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>} />
          <Route path="/product/catalog/add" element={<RequireAuth><AddProductToCatalogPage /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/add" element={<RequireAuth><AddProduct /></RequireAuth>} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
