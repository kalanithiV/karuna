import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AccountDetails from './pages/AcountDeatils/account-details';
import PaymentDetails from './pages/payment-details/paymentdetail';
import Header from './components/Header/Header';
import Homepage from './pages/Home/Homepage';
import AddingIntegrity from './pages/AddingIntegrity/Adding-Integrity';
import Calculator from './pages/Calculator/calcucaltor';
function App() {
  return (
    <div className="App">

      <div className='container'>
      <Header />
    <Homepage />
    <PaymentDetails />
    {/* <AccountDetails /> */}
    <AddingIntegrity />
    <Calculator />
    </div>
    </div>

  );
}

export default App;
