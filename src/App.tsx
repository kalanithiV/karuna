import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AccountDetails from './pages/AcountDeatils/account-details';
import PaymentDetails from './pages/payment-details/paymentdetail';
import Header from './components/Header/Header';
import Homepage from './pages/Home/Homepage';
import AddingIntegrity from './pages/AddingIntegrity/Adding-Integrity';
import Calculator from './pages/Calculator/calcucaltor';
import Fooddetails from './pages/fooddetails/fooddetails';
import Fooddetailpage from './components/Foodsection/FoodDetailPage';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";





function App() {
  return (
    <div className="App">

      <div className='container'>
        
      {/* <Header />
    <Homepage />
    <PaymentDetails />
    <AccountDetails />
    <AddingIntegrity /> */}
    {/* <Calculator />
    <Fooddetails /> */}
    <Router>
          <Routes>
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/food-detailpage/:id" element={<Fooddetailpage />} />
            <Route path="/" element={<Fooddetails />} />
            <Route path="about" element={<div>About</div>} />
          </Routes>
        </Router>
    
    </div>
    </div>

  );
}

export default App;
