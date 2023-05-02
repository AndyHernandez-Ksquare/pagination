export interface IInfoPokemon {
  name: string;
  url: string;
}

export interface IListResults<T> {
  count: number;
  next: string;
  previous: number;
  results: T[];
}

interface IPokeType {
  slot: number;
  type: IInfoPokemon;
}

export interface IPokemonDetails {
  order: number;
  sprites: {
    front_default: string;
    front_shiny: string;
    versions: {};
  };
  forms: { name: string }[];
  types: IPokeType[];
  height: number;
  weight: number;
}

export interface IIdAndName {
  id: number;
  name: string;
}

export interface ITypeDetails {
  pokemon: { pokemon: IInfoPokemon; slot: number }[];
}

export interface Pagination {
  pokemons: IInfoPokemon[];
  currentPage: number;
  totalPages: number;
  displayPages: number[];
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}
