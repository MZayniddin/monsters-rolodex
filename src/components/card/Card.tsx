import { Component } from "react";
import { Monster } from "../../App";

import "./Card.css";

type CardProps = {
  monster: Monster;
};

export class Card extends Component<CardProps> {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180&bgset=bg2`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
