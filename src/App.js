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
