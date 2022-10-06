// import React, { useContext } from "react";
// import { TodoContext } from '../TodoContext';
// import './TodoSearch.css'
import { FaSearch } from "react-icons/fa";
// import lupa from '../../assets/icons/lupa1.png'
// modular-selling\src\components\templates\TodoSearch.js

function TodoSearch(){
    // const {searchValue,setSearchValue}=useContext(TodoContext);
    // const onSearchValueChange=(event)=>{
    // setSearchValue(event.target.value)
    // }
    return(
        <div className="containerSearch">
        <input
        className="TodoSearch" 
        placeholder="Buscar productos"
        // value={searchValue}
        // onChange={onSearchValueChange}
        />
           <div className="search">
        <span className="iconSearch"><FaSearch/>
        {/* <img src={lupa} alt="lupa"></img> */}
        </span>
        </div>
        </div>
    )
}

export { TodoSearch };