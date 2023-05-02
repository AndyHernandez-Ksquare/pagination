import React from "react";
import "../Pokemon.css";

type Props = { types: string[] };

const PokemonTypes = ({ types }: Props) => {
  return (
    <ul>
      {types.map((value) => (
        <li className={`${value}`} key={value}>
          {value}
        </li>
      ))}
    </ul>
  );
};

export default PokemonTypes;
