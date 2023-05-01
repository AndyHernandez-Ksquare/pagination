import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";
import "../Pokedex.css";

type Props = {
  pokemon: IInfoPokemon[];
};

const Pokedex = ({ pokemon }: Props) => {
  // Generate an array of page numbers to display

  const list = pokemon?.map((value) => (
    <Pokemon name={value.name} url={value.url} key={value.name} />
  ));

  return <section className="pokedex">{list}</section>;
};

export default Pokedex;
