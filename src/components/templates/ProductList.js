import React from "react";
import { connect } from "react-redux";
// import lupa from '../../assets/icons/lupa1.png'

const ProductList = ({ categories }) => {
  const printProducts = categories.map((categorie) => (
      <div  key={categorie.id}  className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm">
          <img
                className="ImgProduct"
                src={categorie.img}
                alt="caregorie"
               
              ></img>
          <div className="p-4">
            <h5> <a href="#/" className="text-dark">{categorie.name}</a></h5>
            <p className="small text-muted mb-0">{categorie.description}</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
              <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
            </div>
          </div>
        </div>
      </div>

   
  ));
  return(
  <section className="containerListProduct">
  <div className="container-fluid">
  <div className="px-lg-5"></div>
  <div className="row">
    {printProducts}
    </div>
    <div className="py-5 text-right"><a href="/#" className="btn btn-dark px-5 py-3 text-uppercase">Show me more</a></div>
  </div>
  </section>
  )
  // <div className="row containerListProducts">{printProducts}</div>;
};


const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

// <section className="containerListProduct">
// <div className="row product-list">
//     <div className="col-sm-6 col-md-4 product-item">
//         <div className="product-container">
//             <div className="row">
//                 <div className="col-md-12"><a className="product-image" href="/"><img src={lupa} className="imgProductList" alt="imgProduct"/></a></div>
// </div>
// <div className="row">
//     <div className="col-8">
//         <h2><a href="/">iPhone 6s</a></h2>
//     </div>
//     <div className="col-4"><a className="small-text" href="/">compare </a></div>
// </div>
// <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="/">82 reviews</a></div>
// <div className="row">
//     <div className="col-12">
//         <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare sem sed nisl dignissim, facilisis dapibus lacus vulputate. Sed lacinia lacinia magna. </p>
//         <div className="row">
//             <div className="col-6"><button className="btn btn-light" type="button">Buy Now!</button></div>
//             <div className="col-6">
//                 <p className="product-price">$599.00 </p>
//             </div>
//         </div>
//     </div>
// </div>
//         </div>
//     </div>
//      <div className="col-sm-6 col-md-4 product-item">
//         <div className="product-container">
//             <div className="row">
//                 <div className="col-md-12"><a className="product-image" href="/"><img src={lupa} className="imgProductList" alt="imgProduct"/></a></div>
//             </div>
//             <div className="row">
//                 <div className="col-8">
//                     <h2><a href="/">iPhone 6s</a></h2>
//                 </div>
//                 <div className="col-4"><a className="small-text" href="/">compare </a></div>
//             </div>
//             <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="/">82 reviews</a></div>
//             <div className="row">
//                 <div className="col-12">
//                     <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare sem sed nisl dignissim, facilisis dapibus lacus vulputate. Sed lacinia lacinia magna. </p>
//                     <div className="row">
//                         <div className="col-6"><button className="btn btn-light" type="button">Buy Now!</button></div>
//                         <div className="col-6">
//                             <p className="product-price">$599.00 </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="col-sm-6 col-md-4 product-item">
//         <div className="product-container">
//             <div className="row">
//                 <div className="col-md-12"><a className="product-image" href="/">
//                     <img src={lupa} className="imgProductList" alt="imgProduct"/>
//                     </a></div>
//             </div>
//             <div className="row">
//                 <div className="col-8">
//                     <h2><a href="/">iPhone 6s</a></h2>
//                 </div>
//                 <div className="col-4"><a className="small-text" href="/">compare </a></div>
//             </div>
//             <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="/">82 reviews</a></div>
//             <div className="row">
//                 <div className="col-12">
//                     <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare sem sed nisl dignissim, facilisis dapibus lacus vulputate. Sed lacinia lacinia magna. </p>
//                     <div className="row">
//                         <div className="col-6"><button className="btn btn-light" type="button">Buy Now!</button></div>
//                         <div className="col-6">
//                             <p className="product-price">$599.00 </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </section>


////

  // <section className="containerListProduct" key={product.id}>
    //   <div className="row product-list" key={product.id}>
    // <div className="col-sm-6 col-md-4 product-item" key={product.id} >
    //   <div className="cardProduct">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <a className="product-image" href="/">
    //           {" "}
    //           <img
    //             className="ImgProduct"
    //             src={product.img}
    //             alt={product.name}
    //           ></img>
    //         </a>
    //       </div>
    //     </div>
    //     {/* <div className="product-container"> */}
    //     <div className="row">
    //       <div className="col-8">
    //         <h2>
    //           <a href="/">iPhone 6s</a>
    //         </h2>
    //       </div>
    //       <div className="col-4">
    //         <a className="small-text" href="/">
    //           compare{" "}
    //         </a>
    //       </div>
    //     </div>
    //     {/* </div> */}
    //     <div className="product-rating">
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star-half"></i>
    //       <a className="small-text" href="/">
    //         82 reviews
    //       </a>
    //     </div>
    //     <div className="row">
    //       <div className="col-12">
    //         <p className="product-description">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
    //           ornare sem sed nisl dignissim, facilisis dapibus lacus
    //           vulputate. Sed lacinia lacinia magna.{" "}
    //         </p>
    //         <div className="row">
    //           <div className="col-6">
    //             <button className="btn btn-light" type="button">
    //               Buy Now!
    //             </button>
    //           </div>
    //           <div className="col-6">
    //             <p className="product-price">$599.00 </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // // </div>
    // <div className="container-fluid">
    //   <div className="px-lg-5"></div>
    //   <div className="row">