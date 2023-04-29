import React from "react";

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
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
};

export default PokemonTypes;
