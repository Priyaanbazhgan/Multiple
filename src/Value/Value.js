import React from "react";
import "./Value.css";

const Box = (props) => {
    const { name, work, no, mail, website, place } = props;
    return (
        <div className="main">
           <div className="name">
               <h2>{name}</h2>
           </div>
           <div className="detail">
               <span>work:</span>{work}<br></br>
               <span>no:</span>{no}<br></br>
               <span>mail:</span>{mail}<br></br>
               <span>website:</span>{website}<br></br>
               <span>place:</span>{place}<br></br>
           </div>
        
        </div >
    );
};
export default Box;