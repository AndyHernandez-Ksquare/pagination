import { useEffect, useState } from "react";
import { IInfoPokemon, ITypeDetails } from "../interfaces";

const useFetchPokemonsByType = () => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [pokemonByType, setPokemonByType] = useState<IInfoPokemon[]>([]);

  useEffect(() => {
    const fn = async () => {
      const req = await fetch(selectedType);
      const data: ITypeDetails = await req.json();

      const mappedData = data.pokemon.map((value) => value.pokemon);
      setPokemonByType(mappedData.slice(0, 10));
    };
    if (selectedType) {
      fn().catch(console.error);
    }
  }, [selectedType]);

  return { selectedType, setSelectedType, pokemonByType };
};

export default useFetchPokemonsByType;
