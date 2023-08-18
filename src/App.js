import './App.css';
import Home from './Components/Home';
import { NavBar } from './Components/NavBar';
import Product from './Components/Product';
import Products from './Components/Products';
import { Routes,Route } from 'react-router-dom';
function App() {
  console.log('first')
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Products/:id' element={<Product/>}/>
    </Routes>
    </>
  );
}

export default App;
