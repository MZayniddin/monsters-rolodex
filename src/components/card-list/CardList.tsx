import { Component } from "react";
import Card from "../card/Card";
import { Monster } from "../../App";

import "./CardLlst.css";

type CardListProps = {
  monsters: Monster[];
};

export class CardList extends Component<CardListProps> {
  render() {
    const { monsters } = this.props;
    console.log("render from CardList");
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
