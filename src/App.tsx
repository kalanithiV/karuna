import './App.css';
import Fooddetails from './pages/Fooddetails/FoodSection';
import Fooddetailpage from './components/Foodsection/FoodDetailPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import EmployeeDetails from "./pages/Employees/MovieDetails"

function App() {
  return (
    <div className="App">

      <div className='container'>
    <Router>
          <Routes>
          <Route path="/" element={<Fooddetails />} />
          <Route path="/food-detailpage/:id" element={<Fooddetailpage />} />
          <Route path="/employee-detail" element={<EmployeeDetails />} />
          </Routes>
        </Router>
    </div>
    </div>

  );
}

export default App;
