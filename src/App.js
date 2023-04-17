import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    console.log("constructor initialized");
  }

  componentDidMount() {
    console.log("Did Mounted");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => {
          return { monsters: data };
        })
      );
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return {
        searchField: e.target.value.toLowerCase(),
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField)
    );
    console.log("render");

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder={"Search monsters"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
