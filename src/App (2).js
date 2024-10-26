import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import ManageUserPage from './pages/ManageUserPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import ProductPage from './pages/ProductPage';
import SalesPage from './pages/SalesPage';
import StockPage from './pages/StockPage';
function App() {
  return (
    <BrowserRouter>
    <MainLayout>
    <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/order" element={<OrderPage/>} />
          <Route path="/sales" element={<SalesPage/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/manageuser" element={<ManageUserPage/>} />
          <Route path="/stock" element={<StockPage/>} />
        </Routes>
    </MainLayout>
  </BrowserRouter>
  );
}

export default App;
