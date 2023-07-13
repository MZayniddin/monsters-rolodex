import { Component, ChangeEvent } from "react";

import "./SearchBox.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

class SearchBox extends Component<SearchBoxProps> {
  render() {
    const { className, placeholder, onChangeHandler } =
      this.props;

    return (
      <input
        type={"search"}
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
