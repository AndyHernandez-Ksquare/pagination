import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";

type Props = {
  pokemon: IInfoPokemon[];
};

const Pokedex = ({ pokemon }: Props) => {
  const list = pokemon?.map((value) => (
    <Pokemon name={value.name} url={value.url} key={value.name} />
  ));
  return <section className="pokedex">{list}</section>;
};

export default Pokedex;
