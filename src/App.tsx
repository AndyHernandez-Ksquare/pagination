import React from "react";
import "./App.css";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import useFetchSearchBar from "./logic/useFetchSearchBar";
import Pokemon from "./components/Pokemon";

function App() {
  const { pokemon } = useFetchPokemon();
  const { types } = useFetchTypes();
  const { selectedType, pokemonByType, setSelectedType } =
    useFetchPokemonsByType();
  const { searchBarValue, setSearchBarValue, searchURL, setSearchURL } =
    useFetchSearchBar();

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
          pokemon={pokemon}
        />
      ) : (
        <Pokedex
          searchURL={searchURL}
          searchValue={searchBarValue}
          pokemon={pokemonByType}
        />
      )}
      {searchBarValue && <Pokemon name="test" url={searchURL}></Pokemon>}
    </section>
  );
}

export default App;
