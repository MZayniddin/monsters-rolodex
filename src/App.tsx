import { Component, ChangeEvent } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

import { getData } from "./utils/data.utils";

import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

interface IProps {}

interface IState {
  monsters: Monster[];
  searchField: string;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };

    console.log("constructor initialized");
  }

  componentDidMount() {
    console.log("Did Mounted");

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      this.setState({ monsters: users });
    };

    fetchUsers();
  }

  onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
