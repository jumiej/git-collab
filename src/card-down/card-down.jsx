import React from "react";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img1 from "../images/img1.png";
import '../card-down/card-down.css';

function CardDown(){
    return (
        <>
            <div className="cards-section">
                <div>
                    <img src={img3} alt="perfume2"/>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eaque adipisci ab, architecto quos tempore reiciendis provident natus dolor laudantium sunt quam quis quia est veniam maxime, blanditiis deserunt at?
                    </p>
                </div>

                <div>
                <img src={img4} alt="perfume2"/>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eaque adipisci ab, architecto quos tempore reiciendis provident natus dolor laudantium sunt quam quis quia est veniam maxime, blanditiis deserunt at?
                </p>
                </div>

                <div>
                    <img src={img1} alt="perfume2"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eaque adipisci ab, architecto quos tempore reiciendis provident natus dolor laudantium sunt quam quis quia est veniam maxime, blanditiis deserunt at?
                    </p>
                </div>
                
                
            </div>

        </>
    )
}

export default CardDown;
