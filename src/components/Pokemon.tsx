import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const { order, sprite, types, generation, height, weight } =
    useFetchPokemonDetails(url);
  console.log(generation);
  return (
    <section style={{ width: 250, height: 200, backgroundColor: "#ccc" }}>
      <h5 style={{ marginBottom: 0 }}>{name}</h5>
      <section>
        <PokemonTypes types={types} />
        <h6 style={{ margin: 0 }}>No. {order}</h6>
        <span style={{ fontSize: "12px" }}>Height {height}</span>
        <span style={{ fontSize: "12px" }}>Weight {weight}</span>
        <span style={{ fontSize: "12px" }}>{generation}</span>
        <figure>
          <img src={sprite} alt={name} />
        </figure>
      </section>
    </section>
  );
};

export default Pokemon;
