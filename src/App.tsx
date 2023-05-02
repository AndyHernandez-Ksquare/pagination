import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import useFetchSearchBar from "./logic/useFetchSearchBar";
import Pokemon from "./components/Pokemon";
import usePagination from "./logic/usePagination";
import Pagination from "./components/Pagination";
import SearchBarAndTypeSelect from "./components/SearchBarAndTypeSelect";

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

  return (
    <section className="App">
      <SearchBarAndTypeSelect
        types={types}
        selectedType={selectedType}
        searchBarValue={searchBarValue}
        setSearchBarValue={setSearchBarValue}
        setSearchURL={setSearchURL}
        setSelectedType={setSelectedType}
      />

      {searchBarValue && !notFound && (
        <Pokemon name="test" url={searchURL}></Pokemon>
      )}

      {!selectedType ? (
        <Pokedex pokemon={pokemons} />
      ) : (
        <Pokedex pokemon={pokemonByType} />
      )}

      <Pagination
        displayPages={displayPages}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </section>
  );
}

export default App;
