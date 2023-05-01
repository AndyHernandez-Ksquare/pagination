import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";
import "../Pokemon.css";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ url }: Props) => {
  const { order, sprite, types, generation, height, weight, name } =
    useFetchPokemonDetails(url);

  return (
    <section className={`pokemonContainer ${types[0]} ${types[0]}Card`}>
      <section className="nameAndOrder">
        <h6 style={{ margin: 0 }}>#{order}</h6>
        <h5>{name}</h5>
      </section>
      <PokemonTypes types={types} />

      <section className="pokemonMiddle">
        <section className="pokemonDescription">
          <span>Height {height}</span>
          <span>Weight {weight}</span>
          <span>{generation}</span>
        </section>
        <section>
          <figure>
            <img src={sprite} alt={name} />
          </figure>
        </section>
      </section>
    </section>
  );
};

export default Pokemon;
