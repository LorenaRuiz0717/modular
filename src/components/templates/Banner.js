import React from "react";
// import { Button } from "../organisms/Button";
import SliderPromotions from "../organisms/SliderPromotions";



const Banner=()=>{
    return(
        <div className="containerBanner">
            <SliderPromotions/>
           <div className="contentBanner">
            {/* <h2 className="sloganBanner">Estár cómodo,<br/> nunca fue tan fácil.</h2>
            <Button/> */}
           </div>
        </div>
    )
}

export {Banner}