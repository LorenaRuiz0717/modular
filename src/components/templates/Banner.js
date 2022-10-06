import React from "react";
// import { Button } from "../organisms/Button";
import { Slider } from "../organisms/Slider";


const Banner=()=>{
    return(
        <div className="containerBanner">
            <Slider/>
           <div className="contentBanner">
            {/* <h2 className="sloganBanner">Estár cómodo,<br/> nunca fue tan fácil.</h2>
            <Button/> */}
           </div>
        </div>
    )
}

export {Banner}