import React from "react";
import { IInfoPokemon } from "../interfaces";

type Props = {
  types: IInfoPokemon[];
  selectedType: string;
  searchBarValue: string | number;
  setSearchBarValue: React.Dispatch<React.SetStateAction<string | number>>;
  setSearchURL: React.Dispatch<React.SetStateAction<string>>;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBarAndTypeSelect = ({
  types,
  selectedType,
  searchBarValue,
  setSearchBarValue,
  setSearchURL,
  setSelectedType,
}: Props) => {
  const list = types.map((value) => (
    <option value={value.url} key={value.name}>
      {value.name.toUpperCase()}
    </option>
  ));
  return (
    <form>
      <select
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.target.value);
        }}
        name="Type selection"
        id="typeSelection"
      >
        <option value="">Select a type</option>
        {list}
      </select>
      <input
        placeholder="Search by name or id"
        value={searchBarValue}
        onChange={(e) => {
          setSearchBarValue(() => e.target.value);
          setSearchURL(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
        }}
      />
    </form>
  );
};

export default SearchBarAndTypeSelect;
