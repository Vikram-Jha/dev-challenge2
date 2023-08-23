import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Footer from "../components/Footer";
import Page404 from "../pages/Page404";
import CartPage from "../pages/CartPage";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Router>
      <NavBar background={"transparent"} />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
