import './App.css';
import { Box, Button } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './components/Product/Products';
import ProductDetail from './components/Product/ProductDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <Router>
      <Box style={{display:"flex", justifyContent:"flex-end"}}>
       <Link to = {'/orders'} ><Button variant='contained'>My Orders</Button></Link>
      </Box>
    <Box style={{marginTop:100}}>
      
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*"  element={
          <main style={{ marginTop: 60,  padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
    </Box>
  </Router>
  );
}

export default App;
