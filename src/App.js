import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './views/Menu';
import Details from './views/Details';
import Basket from './views/Basket';
import Slider from './components/Slider';
import Payments from './views/Payments';
import NewCreditCard from './views/NewCreditCard';
import Restaurant from './views/Restaurant';
import SearchResultPage from './views/SearchResultPage';
import CategoryPage from './views/CategoryPage';
import SearchPage from './views/SearchPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="/basket" element={<Basket/>} />
          <Route path="/food-details" element={<Details/>} />
          <Route path="/payment" element={<Payments/>} />
          <Route path="/card" element={<NewCreditCard/>} />
          <Route path="/restaurant" element={<Restaurant/>} />
          <Route path="/searchresultpage" element={<SearchResultPage/>} />
          <Route path="/categorypage" element={<CategoryPage/>} />
          <Route path='/searchpage' element={<SearchPage/>}/>
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