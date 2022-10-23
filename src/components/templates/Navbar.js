import React from "react";
// import { FaCouch, FaUmbrella, FaRegCreditCard, FaVest, FaAngleDown } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav class="navbar navbar-light navbar-expand-md navigation-clean navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="container_itemsNav">
          <a
            class="navbar-brand"
            // style="padding:0px;margin-left:0px;height:82px"
            href="#/"
          >
            <img src={logo} alt="logo" />
          </a>
          <button
            data-bs-toggle="collapse"
            class="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon">
              <i class="fas fa-bars fs-1 text-light"></i>
            </span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul
            class="navbar-nav ms-auto container_item"
            // style="margin-top:13px;"
          >
            <li class="nav-item">
              <a class="nav-link" uk-scroll="offset:50" href="#/"> 
                INICIO
               </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" uk-scroll="offset:100" href="#empresa">
                ¿QUIENES SOMOS?
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" uk-scroll="offset:50" href="#diferencial">
                TieNDA
              </a>
            </li>
          </ul>
          <div class="container_search">
            <input type="search" class="input_search" />
            <i class="fas fa-search icon_search"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
