import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Buscar"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        // console.log("Escribiste en el Todo Search");
        // console.log(event.target);
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
