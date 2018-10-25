import React from "react";
import "./Travel.css";
const Travel = props => (
  <figure>
      <h1>{props.destination}</h1>
    <img className="image" src={props.image} alt={props.destination} />
    <figcaption>
      <blockquote>{props.pays}</blockquote>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Travel;