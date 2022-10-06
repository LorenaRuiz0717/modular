import React from "react";
// import { FaCouch, FaUmbrella, FaRegCreditCard, FaVest, FaAngleDown } from "react-icons/fa";
import {TodoSearch} from './TodoSearch'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarBrand">
        <img className="logo"src={logo} alt="logo"></img>
      </div>
      {/* <div className="navbarLinks">
        <div className="navbarLink">
          <span>
            icon
          </span>
          <a href="#PufiPuff">Pufi Puff</a>
        </div>
        <hr />
        <div className="navbarLink">
          <span>
          icon
          </span>
          <a href="#PufiRain">Pufi Rain</a>
        </div>
        <hr />
        <div className="navbarLink">
          <span>
          icon
          </span>
          <a href="#PufiCart">Pufi Cart</a>
        </div>
        <hr />
        <div className="navbarLink">
          <span>
          icon
          </span>
          <a href="#PufiNap">Pufi Nap</a>
        </div>
      </div> */}
  
      <TodoSearch/> 
      <div className="navbarUser">
      <span><a href="#inicio">Inicio</a></span>
      {/* <hr /> */}
      <a href="#QuienesSomos">¿Quienes somos?</a>
      <hr />
      <a href="#Tienda">Tienda</a>
      </div>
    </div>
  );
};

export { Nav };
