import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";
import "../Pokemon.css";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ url }: Props) => {
  const {
    order,
    sprite,
    types,
    generation,
    height,
    weight,
    name,
    spriteType,
    toggleSprite,
  } = useFetchPokemonDetails(url);

  return (
    <section className={`pokemonContainer ${types[0]} ${types[0]}Card`}>
      <section className="nameAndOrder">
        <section className="orderAndSpriteChange">
          <h6 style={{ margin: 0 }}>#{order}</h6>{" "}
          <button
            className={`spriteToggle ${spriteType}`}
            onClick={toggleSprite}
          >
            {spriteType === "front_default" ? "Shiny" : "Default"}
          </button>
        </section>
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
