import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import About from './page/About';
import FeaturedPage from './page/Featured';
import ExplorePage from './page/Explore';
import Home from './page/Home';
import ProductPage from './page/ProductPage';
import FeaturedListPage from './page/FeaturedList';
import ReactGA from 'react-ga';
import useGaTRacker from './utils/useGaTRacker';

const TRACKING_ID = "UA-155000208-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  useGaTRacker()
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
