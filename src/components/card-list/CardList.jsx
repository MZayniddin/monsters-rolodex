import { Component } from "react";
import Card from "../card/Card";
import "./CardLlst.css";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("render from CardList");
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
