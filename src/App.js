import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './component/Header';
import About from './page/About';
import FeaturedPage from './page/Featured';
import ExplorePage from './page/Explore';
import Home from './page/Home';
import ProductPage from './page/ProductPage';
import FeaturedListPage from './page/FeaturedList';
import ReactGA from 'react-ga';
import useGaTRacker from './utils/useGaTRacker';
import Cart from './page/Cart';
import { createContext, useEffect } from 'react';
import useCart from './hooks/useCart';
import { CartContext } from './context/CartContext';

const TRACKING_ID = "UA-155000208-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  // useGaTRacker()
  const location = useLocation()
  const cart = useCart()
  const background = location.state && location.state.background;

  return (
    <>
      <CartContext.Provider value={cart}>
        <Header />
        {location.pathname === "/cart" && <Cart />}
        <Routes location={background || location}>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/featured/:id" element={<FeaturedPage />} />
          <Route path="/featured" element={<FeaturedListPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
          <Route path="/" element={<Home />} />
          {background && <Route path='/cart' element={<Cart />} />}
        </Routes>
      </CartContext.Provider>
    </>

  );
}

export default App;
