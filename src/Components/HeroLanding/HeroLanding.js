import React from "react";
import "../../App.css"
import HeroImg from "../../Images/Group.png";
// import HeroImg from "../../../public/Images/Group.png";

export default function HeroLanding() {
    return(
        <div className="Hero">
            <header className="header-landing">
                <img className="hero-img" src={HeroImg} alt="Hero-design"/>
            </header>

            <h1 className="bold-paragrah">Online Experiences</h1>
            <p className="text-pargraph">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}