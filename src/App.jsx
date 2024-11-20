import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AuthProvider from './contexts/AuthContext';
import SignIn from './pages/SignIn';
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import Orders from './pages/Orders';
import ProductProvider from './contexts/ProductContext';
import UserProvider from "./contexts/UserContext"; 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import ProtectRoute from "./components/ProtectRoute";
const App = () => {
  document.title ="ArewaXtra - Admin Panel"
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <ProductProvider>
            <ToastContainer position='bottom-right' autoClose={3000} />
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/dashboard" element={<Home />} />
            </Routes>
          </ProductProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}
export default App