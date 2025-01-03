import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Product from './Product';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   
  
   
   <BrowserRouter>
   <Link to="/product">Product </Link>
   <Link to="/">Home </Link>
        <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/" element={<Home />} />
        
        
 
        </Routes>

      </BrowserRouter>
   </>
  );
}

export default App;
