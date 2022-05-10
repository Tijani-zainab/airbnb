import React from "react";
import "../../App.css";
import { FaStar } from "react-icons/fa";

export default function Cards(props) {

    // let badgeText 
    // if (props.openSpots = 0) {
    //     badgeText = "SOLD OUT"
    // } else if (props.location = "Online") {
    //     badgeText = "ONLINE"
    // }
    // {returned an error, expected a conditonal expression but got an assignment. (if it were to work, we'd render {badgeText} down inside "card--badge")}
    
    return(
        <div className="cards">
            {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} {/*if the first statement is truthy, run/render the second statement */}
            <img className="card--image" alt="cover" src={`${props.coverImg}`}/>
    
            <div>
                <p className="cards-paragraph"><FaStar className="red-star"/>{props.stats}</p>
                <p className="cards-paragraph">{props.title}</p>
                <p className="cards-paragraph"><strong>From ${props.price}</strong> /person</p>
            </div>
            
         
        </div>
    )
}


// tip 
// passing backgroundImage in jsx
//call the image from the dataBase and pass as an inline style
//will probably be other better ways to do this.
/* <div className="sold-background" style={{backgroundImage: `url(${props.coverImg})`}}> 

</div> */