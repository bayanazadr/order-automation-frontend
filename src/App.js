import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './views/Menu';
import Details from './views/Details';
import Basket from './views/Basket';
import Payments from './views/Payments';
import NewCreditCard from './views/NewCreditCard';
import Promotion from './views/Promotion';
import SearchResultPage from './views/SearchResultPage';
import CategoryPage from './views/CategoryPage';
import SearchPage from './views/SearchPage';
import StatusPage from './views/StatusPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/:tableId?" element={<Menu/>}/>
          <Route path="/basket" element={<Basket/>} />
          <Route path="/food-details" element={<Details/>} />
          <Route path="/payment" element={<Payments/>} />
          <Route path="/card" element={<NewCreditCard/>} />
          <Route path="/promotion" element={<Promotion/>} />
          <Route path="/search" element={<SearchResultPage/>} />
          <Route path="/category" element={<CategoryPage/>} />
          <Route path='/searchpage' element={<SearchPage/>}/>
          <Route path='/status' element={<StatusPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;