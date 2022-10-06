import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";

const SliderBrands=({brands})=>{
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const printBrands=brands.map((brand,index)=>(

  <div className="imgBrand"key={index}>
  <img
    className="ImgProduct"
    src={brand.img}
    alt={brand.name}
    ></img>
  </div>

  
));
return(

  <div className="containerSliderBrands">
   <Carousel responsive={responsive} >
 {printBrands}
 </Carousel>
 </div>
)}


const mapStateToProps = (state) => ({
  brands: state.brands,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SliderBrands);

