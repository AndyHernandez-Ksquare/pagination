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
  const {
    searchBarValue,
    setSearchBarValue,
    searchURL,
    setSearchURL,
    notFound,
  } = useFetchSearchBar();
  const {
    pokemons,
    currentPage,
    totalPages,
    displayPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  } = usePagination();

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
          name="Type selection"
          id="typeSelection"
        >
          <option value="">Select a type</option>
          {list}
        </select>
        <input
          placeholder="Search by name or id"
          value={searchBarValue}
          onChange={(e) => {
            setSearchBarValue(() => e.target.value);
            setSearchURL(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
          }}
        />
      </form>
      {searchBarValue && !notFound && (
        <Pokemon name="test" url={searchURL}></Pokemon>
      )}

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
        />
      )}
    </section>
  );
}

export default App;
