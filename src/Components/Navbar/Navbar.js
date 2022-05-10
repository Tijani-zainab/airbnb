import React from "react";
import "../../App.css";
import LogoImg from "../../Images/Vector.png";
// import LogoImg from "../../../public/Images/Vector.png";


export default function Navbar() {
    return(
        <div className="Navbar">
            <nav>
                <img src={LogoImg} alt="Logo" />
            </nav>
        </div>
    )
}