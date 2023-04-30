import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";

type Props = {
  pokemon: IInfoPokemon[];
  searchValue: string | number;
  searchURL: string;
  currentPage: number;
  displayPages: number[];
  totalPages: number;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
};

const Pokedex = ({
  pokemon,
  searchValue,
  searchURL,
  currentPage,
  displayPages,
  totalPages,
  goToPage,
  goToNextPage,
  goToPreviousPage,
}: Props) => {
  // Generate an array of page numbers to display

  const list = pokemon?.map((value) => (
    <Pokemon
      searchURL={searchURL}
      searchValue={searchValue}
      name={value.name}
      url={value.url}
      key={value.name}
    />
  ));

  return (
    <section className="pokedex">
      {list}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={goToPreviousPage}>Prev</button>
          {displayPages.map((page) => (
            <button
              key={page}
              onClick={() => {
                goToPage(page);
              }}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          ))}
          <button onClick={goToNextPage}>Next</button>
        </div>
      )}
    </section>
  );
};

export default Pokedex;
