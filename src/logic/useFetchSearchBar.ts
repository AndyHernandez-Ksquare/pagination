import { useState } from "react";

const useFetchSearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string | number>("");
  const [searchURL, setSearchURL] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon/`
  );

  //   useFetchPokemonDetails(searchBarValue ? searchURL : "");

  return { searchBarValue, setSearchBarValue, searchURL, setSearchURL };
};

export default useFetchSearchBar;
