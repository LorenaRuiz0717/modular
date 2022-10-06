// import React from "react";
// import {
//   FaShieldAlt,
//   FaQrcode,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";
// import { connect } from "react-redux";
// import logo from '../../assets/logo.png'

// const Footer = ({ brands,index }) => {
//   const CreateList = brands.map((brand) => (
//     <li key={index}>{brand.name}</li>
//   ));

//   const ContainerList = () => (
//     <footer>
//       <div className="containerFooter">
//         <div className="columnFooter">
//         <img className="logoFooter"src={logo} alt="logo"></img>
//         </div>
//         <div className="columnFooter">
//           <ul>{CreateList}</ul>
//         </div>
//         <hr className="hrFooter" />
//         <div className="columnFooter">
//           <ul>
//           <a href="#Contact"> <li>Contacto</li></a>
//           <a href="#help"><li>Ayuda</li></a>
//           <a href="#buy">  <li>Como comprar</li></a>
//           <a href="#termns">  <li>Terminos & condiciones</li></a>
//           </ul>
//         </div>
//         <hr className="hrFooter" />
//         <div className="columnFooter">
//           <ul>
//             <li>Compra 100% segura</li>
//           </ul>
//           <div className="sureBuyIcons">
//             <FaQrcode className="qr" />
//             <FaShieldAlt />
//             <p>Compra con la garantia pufi</p>
//           </div>
//         </div>
//         <hr className="hrFooter" />
//         <div className="columnFooter">
//           <div className="socialMedia">
//             <p>Siguenos en</p>
//           <a href="#Facebook"> <FaFacebookF /></a> 
//           <a href="#Twittee">  <FaTwitter /></a>
//           <a href="#Instagram"><FaInstagram /></a>
//           </div>
//         </div>
//       </div>
//       <hr/>
//     </footer>
//   );
//   return (
//     <div>
//       <ContainerList />{" "}
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   products: state.products,
// });

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(Footer);
