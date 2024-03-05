import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import "./App.css";
import "./index.css"
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Forgot from './pages/forgot/Forgot';
import Cart from './pages/cart/Cart';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
