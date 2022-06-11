import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import About from './page/About';
import FeaturedPage from './page/Featured';
import ExplorePage from './page/Explore';
import Home from './page/Home';
import ProductPage from './page/ProductPage';
import FeaturedListPage from './page/FeaturedList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/featured/:id" element={<FeaturedPage />} />
        <Route path="/featured" element={<FeaturedListPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>

  );
}

export default App;
