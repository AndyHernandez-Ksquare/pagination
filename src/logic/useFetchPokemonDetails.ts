import { useEffect, useState } from "react";
import { IPokemonDetails } from "../interfaces";

const useFetchPokemonDetails = (URL: string, useSearchBarValue?: string) => {
  const [order, setOrder] = useState(0);
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [generation, setGeneration] = useState<string>();
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [name, setName] = useState<string>();

  useEffect(() => {
    const fn = async () => {
      const req = await fetch(URL);
      const data: IPokemonDetails = await req.json();

      setOrder(data.order);
      setSprite(data.sprites.front_default);
      const originalData = data.types;
      const newData = originalData.map(({ type }) => type.name);
      setTypes(newData);
      const versionFirstKey = Object.keys(data.sprites.versions)[0];
      setGeneration(versionFirstKey);
      setHeight(data.height);
      setWeight(data.weight);
      setName(data.forms[0].name);
    };
    fn().catch(console.error);
  }, [URL]);

  return { order, sprite, types, generation, height, weight, name };
};

export default useFetchPokemonDetails;
