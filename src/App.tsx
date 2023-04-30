import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import useFetchSearchBar from "./logic/useFetchSearchBar";
import Pokemon from "./components/Pokemon";
import usePagination from "./logic/usePagination";

function App() {
  const { types } = useFetchTypes();
  const { selectedType, pokemonByType, setSelectedType } =
    useFetchPokemonsByType();
  const { searchBarValue, setSearchBarValue, searchURL, setSearchURL } =
    useFetchSearchBar();
  const {
    pokemons,
    currentPage,
    totalPages,
    displayPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  } = usePagination();

  console.log(searchURL);

  const list = types.map((value) => (
    <option value={value.url} key={value.name}>
      {value.name.toUpperCase()}
    </option>
  ));

  return (
    <section className="App">
      <form>
        <select
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
          }}
          name=""
          id=""
        >
          <option value="">Select a type</option>
          {list}
        </select>
        <input
          onChange={(e) => {
            e.preventDefault();
            setSearchBarValue(() => e.target.value);
            setSearchURL(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
          }}
        />
        <button type="submit">Search by name or id</button>
      </form>
      {!selectedType ? (
        <Pokedex
          searchURL={searchURL}
          searchValue={searchBarValue}
          pokemon={pokemons}
          displayPages={displayPages}
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      ) : (
        <Pokedex
          searchURL={searchURL}
          searchValue={searchBarValue}
          pokemon={pokemonByType}
          displayPages={displayPages}
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      )}
      {searchBarValue && <Pokemon name="test" url={searchURL}></Pokemon>}
    </section>
  );
}

export default App;
