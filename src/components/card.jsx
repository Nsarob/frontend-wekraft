import React from "react";

const Card = (props) => {
  


    return (
        <div className="card-container">
          <div className="card" >
          <p className="desc">{props.desc}</p>
          <div className="profile">
          <div className="prof">
          <img src={props.photo} alt="pic"/>
          </div>
          <div className="text">
          <h3>{props.name}</h3>
          <h3>{props.teacher}</h3>
            <p>{props.location}</p>
            <a href={props.youtube} target="blank" className="ank">{props.titles}</a>
          </div>
           
          </div>
            
          </div>
           
        </div>
    );
};
export default Card;