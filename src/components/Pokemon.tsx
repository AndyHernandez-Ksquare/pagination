import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";
import "../Pokemon.css";

type Props = {
  name?: string;
  url: string;
  searchValue?: string | number;
  searchURL?: string;
};

const Pokemon = ({ url, searchValue, searchURL }: Props) => {
  const { order, sprite, types, generation, height, weight, name } =
    useFetchPokemonDetails(url);
  // console.log(generation);
  return (
    <section className="pokemon-container">
      <h5>{name}</h5>
      <section>
        <PokemonTypes types={types} />
        <h6 style={{ margin: 0 }}>No. {order}</h6>
        <span>Height {height}</span>
        <span>Weight {weight}</span>
        <span>{generation}</span>
        <figure>
          <img src={sprite} alt={name} />
        </figure>
      </section>
    </section>
  );
};

export default Pokemon;
