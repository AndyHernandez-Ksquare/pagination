import React, { useState } from "react";
import "./App.css";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";

function App() {
  const { pokemon } = useFetchPokemon();
  const { types } = useFetchTypes();
  const { selectedType, pokemonByType, setSelectedType } =
    useFetchPokemonsByType();

  const list = types.map((value) => (
    <option value={value.url} key={value.name}>
      {value.name.toUpperCase()}
    </option>
  ));

  return (
    <section className="App">
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
      {!selectedType ? (
        <Pokedex pokemon={pokemon} />
      ) : (
        <Pokedex pokemon={pokemonByType} />
      )}
    </section>
  );
}

export default App;
