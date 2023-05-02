import { useEffect, useState } from "react";
import { IPokemonDetails } from "../interfaces";

type SpriteType = "front_default" | "front_shiny";

const useFetchPokemonDetails = (URL: string, useSearchBarValue?: string) => {
  const [order, setOrder] = useState(0);
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [generation, setGeneration] = useState<string>();
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [name, setName] = useState<string>();
  const [spriteType, setSpriteType] = useState<SpriteType>("front_default");

  useEffect(() => {
    const fn = async () => {
      const req = await fetch(URL);
      const data: IPokemonDetails = await req.json();

      setOrder(data.order);
      setSprite(data.sprites[spriteType]);
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
  }, [URL, spriteType]);

  const toggleSprite = () => {
    setSpriteType(
      spriteType === "front_default" ? "front_shiny" : "front_default"
    );
  };

  return {
    order,
    sprite,
    types,
    generation,
    height,
    weight,
    name,
    spriteType,
    toggleSprite,
  };
};

export default useFetchPokemonDetails;
