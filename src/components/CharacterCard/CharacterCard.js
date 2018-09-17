import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
<div className="card">
    <div className="img-container">
      <img alt="" src={props.image} />
    </div>
</div>    
)

export default CharacterCard;