import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AccountDetails from './pages/AcountDeatils/account-details';
import PaymentDetails from './pages/payment-details/paymentdetail';
import Header from './components/Header/Header';
import Homepage from './pages/Home/Homepage';
import AddingIntegrity from './pages/AddingIntegrity/Adding-Integrity';
import Calculator from './pages/Calculator/calcucaltor';
import Fooddetails from './pages/fooddetails/fooddetails'
function App() {
  return (
    <div className="App">

      <div className='container'>
      {/* <Header />
    <Homepage />
    <PaymentDetails />
    <AccountDetails />
    <AddingIntegrity /> */}
    <Calculator />
    <Fooddetails />
    </div>
    </div>

  );
}

export default App;
