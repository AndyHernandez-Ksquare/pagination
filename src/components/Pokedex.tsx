import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";

type Props = {
  pokemon: IInfoPokemon[];
  searchValue: string | number;
  searchURL: string;
};

const Pokedex = ({ pokemon, searchValue, searchURL }: Props) => {
  const list = pokemon?.map((value) => (
    <Pokemon
      searchURL={searchURL}
      searchValue={searchValue}
      name={value.name}
      url={value.url}
      key={value.name}
    />
  ));
  return <section className="pokedex">{list}</section>;
};

export default Pokedex;
