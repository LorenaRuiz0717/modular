  import React from "react";
import imgpromo1 from "../../assets/products/banner.png"


const Slider=()=>{
    return(
<div id="carouselExampleIndicators" className="carousel slide containerBanner" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/564x/0d/c5/0f/0dc50f1e23412b6106fdfafe717890b8.jpg" className="imgSlider d-block w-100" alt="imgcarrusel"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/564x/0d/c5/0f/0dc50f1e23412b6106fdfafe717890b8.jpg"className="imgSlider w-100" alt="imgcarrusel"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/564x/0d/c5/0f/0dc50f1e23412b6106fdfafe717890b8.jpg"className="imgSlider w-100" alt="imgcarrusel"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
)}

export {Slider}