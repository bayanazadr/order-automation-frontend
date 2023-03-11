import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './views/Menu';
import { useEffect } from 'react';
import Details from './views/Details';
import Navbar from './components/Navbar';
function App() {
  useEffect(() => {

});

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
