import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './views/Menu';
import { useEffect } from 'react';
import Details from './views/Details';
import Navbar from './components/Navbar';
import Basket from './views/Basket';
function App() {
  useEffect(() => {

});

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="/details" element={<Details />} />
          <Route path="/basket" element={<Basket/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

// вот api для dish: 
// get all as list : https://order-automation-debug-server.onrender.com/api/dishes

// get one: https://order-automation-debug-server.onrender.com/api//getDish/{uuid}

// для category: 
// get all as list: https://order-automation-debug-server.onrender.com/api/getCategories

// get one: https://order-automation-debug-server.onrender.com/api/getCategory/{id}