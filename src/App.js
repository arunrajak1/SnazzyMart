import { Routes, Route } from 'react-router-dom'
import Header from './componets/Header';
import Home from './modules/Home';
import Footer from './componets/Footer';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import ContactPage from './modules/ContactPage';
import About from './modules/About';
import ErrorPage from './modules/404 Page';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/categories/:name' element={<CategoryProducts />} />
        <Route path='cart' element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path='*' element={<ErrorPage/>} /> 
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
