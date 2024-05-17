import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';
import ConditionalRendering from './conditionalRendering';
import AccountDetails from './pages/AcountDeatils/account-details';
import PaymentDetails from "../src/pages/payment-details/paymentdetail"
import Header from "../src/components/Header/Header"
import Homepage from "../src/pages/Home/Homepage"
import AddingIntegrity from "../src/pages/AddingIntegrity/Adding-Integrity"


function App() {

  const items =["gypsy1","gypsy2","gypsy3"]
  const ffff = "Dddd"
  const onClick=()=>{
    alert("ddddddd")
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FirstComponent  items={items}  ffff={ffff} onClick={onClick}/>
      <ConditionalRendering /> */}

      {/* <AccountDetails /> */}
      <div className='container'>
   {/* <Header />  */}
     {/* <Homepage />  */}
      {/* <PaymentDetails /> */}

      <AddingIntegrity />
      </div>
 

    </div>
  );
}

export default App;
