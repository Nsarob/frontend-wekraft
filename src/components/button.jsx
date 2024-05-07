import React from "react";


const Button = (props) => {
    return (
        <button type="submit" className="btn" style={{cursor:'pointer' ,fontSize:'1.8rem', backgroundColor: props.backgrounds, color: props.textColor, padding:'1rem 4rem' , width:'80%',border:'none', textTransform:'capitalize'}}>{props.name}</button>
    )
}
export default Button