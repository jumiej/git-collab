import React from "react";
import './heroSection.css';
import img1 from "../images/img1.png";


export default function Herosection(){

    return(
        <>
        <div className ="jumie">
            <div className="jumie-1">
            <img src={img1} alt= "perfume-1"/>
            </div>
            <div className="jumie-2">
                <p>
                    os presentamos algunas <br/>
                    da las fotografias de <br/>
                    bodegon y publicitaries<br/>
                    relizadas para la<br/>
                    web y las.
                </p>
                <hr />

            </div>
        </div>
        </>
    )
}

