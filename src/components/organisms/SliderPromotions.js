import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { connect } from "react-redux";



const SliderPromotions=({promotions})=>{
   
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 1,
    //   slidesToSlide: 1 // optional, default to 1.
    // },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const printBrands=promotions.map((promotion,index)=>(

  <div className="containerImgPromotions" key={index}>
  <img
    className="imgPromotions"
    src={promotion.img}
    alt={promotion.name}
    ></img>
  </div>  
));
return(

  <div>
   <Carousel
    // swipeable={false}
    // draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    // {this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={2000}
    // keyBoardControl={false}
    // customTransition="all .5"
    // transitionDuration={500}
    // containerClass="carousel-container"
    // removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
    // deviceType={this.props.deviceType}
    // dotListClass="custom-dot-list-style"
    // itemClass="carousel-item-padding-40-px" 
    >
 {printBrands}
 </Carousel>
 </div>
)}


const mapStateToProps = (state) => ({
    promotions: state.promotions,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SliderPromotions);

