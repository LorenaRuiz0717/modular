import { Provider } from "react-redux";
import store from "./store";
// import { Nav } from "./components/templates/Nav";
// import { Banner } from "./components/templates/Banner";
// import ProductList from "./components/templates/ProductList";
// import SliderAuto from './components/organisms/SliderAuto';
// import SectionProduct from './components/templates/SectionProduct';
// import GalleryInstagram from './components/templates/GalleryInstagram';
// import {Newsletter} from './components/templates/Newsletter';
import Footer from './components/templates/Footer';

import SliderBrands from "./components/organisms/SliderBrands";
import SliderPromotions from "./components/organisms/SliderPromotions";
import { Navbar } from "./components/templates/Navbar";
import CategoriesProducts from "./components/templates/CategoriesProducts";
// import { SliderBrands } from './components/organisms/SliderBrands';

function App() {
  return (
    <Provider store={store}>
      {/* <Nav /> */}
      <Navbar/>
      <SliderPromotions />
      {/* <Banner/> */}
      <SliderBrands />
      {/* <SliderAuto/> */}
      {/* <SliderBrands/> */}
      {/* <SectionProduct/> */}
      {/* <GalleryInstagram/> */}
      {/* <Newsletter/> */}
      <CategoriesProducts/>
      {/* <ProductList /> */}
      <Footer/>
    </Provider>
  );
}

export default App;
