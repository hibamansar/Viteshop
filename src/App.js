import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Aceuil from "./pages/Aceuil";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Category from "./pages/Category";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Aceuil />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout-success" element={<CheckoutSuccess />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="category/:category" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
