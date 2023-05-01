import { useState, useEffect } from "react";

const useFetchSearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string | number>("");
  const [searchURL, setSearchURL] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(searchURL);
        if (response.ok) {
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        setNotFound(true);
      }
    };

    if (searchURL !== `https://pokeapi.co/api/v2/pokemon/`) {
      fetchPokemon();
    }
  }, [searchURL]);

  return {
    searchBarValue,
    setSearchBarValue,
    searchURL,
    setSearchURL,
    notFound,
  };
};

export default useFetchSearchBar;
