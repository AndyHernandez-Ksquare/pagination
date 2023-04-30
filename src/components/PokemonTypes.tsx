import React from "react";
import "../Pokemon.css";

type Props = { types: string[] };

const PokemonTypes = ({ types }: Props) => {
  return (
    <ul
      style={{
        padding: 0,
        margin: 0,
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {types.map((value) => (
        <li className={`${value}`} key={value}>
          {value}
        </li>
      ))}
    </ul>
  );
};

export default PokemonTypes;
