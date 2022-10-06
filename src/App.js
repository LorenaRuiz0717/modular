
import { Provider } from 'react-redux';
import store from './store';
import { Nav } from './components/templates/Nav';
import {Banner} from './components/templates/Banner';
// import ProductList from './components/templates/ProductList';
// import SectionProduct from './components/templates/SectionProduct';
// import GalleryInstagram from './components/templates/GalleryInstagram';
// import {Newsletter} from './components/templates/Newsletter';
// import Footer from './components/templates/Footer';
import  SliderBrands  from './components/organisms/SliderBrands';
// import { SliderBrands } from './components/organisms/SliderBrands';

function App() {
  return (
    <Provider store={store}>
    <Nav/>
    <Banner/>
    <SliderBrands/>
    {/* <SliderBrands/> */}
    {/* <SectionProduct/> */}
    {/* <GalleryInstagram/> */}
    {/* <Newsletter/> */}
    {/* <ProductList/> */}
    {/* <Footer/> */}
    </Provider>
  );
}

export default App;
