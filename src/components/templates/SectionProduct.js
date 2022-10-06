import React from "react";
import { connect } from "react-redux";
// import {FaAngleRight} from "react-icons/fa";

const SectionProduct = ({ products }) => {

  const CreateButton=(props)=>{
   return <button className="visibilityButton">Shop</button>
  }

  const ChangeStyle = (props) => {
    const index=props
    console.log(props)
    switch (index) {
      case 1:
      case 3:
        return "containerProduct containerImgLinkProductReverse";
      case 0:
      case 2:
        return "containerProduct";
      default:
        return "";
    }
  };
  
   const Checkid=(props)=> {
    const unicId=props.unicId
    console.log(unicId)
    if (unicId===1) {
      return (
        <CreateButton/>
      )
      }else{
      return null
    }}  

    const printProducts = products.map((product,index) => (
    <section key={product.id}
     className={ChangeStyle(index)}>
      <div className="containerLink">
      <img
          className="containerImgLinkProduct"
          src={product.imgLink}
          alt={product.name}
        ></img>     
      <Checkid unicId={product.id} />
         </div>
      <div className="containerImgProduct">
        <img className="ImgProduct" src={product.img} alt={product.name} ></img>
        <h2 >{product.name}</h2>
        <hr />
        <p >{product.description}</p>
      <div className="seeMore">
         {/* <FaAngleRight/> */}
      <a href="#VerMas">Ver mas</a></div>
      </div>
    </section>
  ));

  return <div>{printProducts}</div>;
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SectionProduct);
