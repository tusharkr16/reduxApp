import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProductComponent from './Components/ProductComponent';
import ProductListing from './Components/ProductListing';
import Detail from "./Components/Detail"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={ProductListing} />
          <Route path='/product/:productid' exact Component={Detail} />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
