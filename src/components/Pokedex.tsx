import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";
import "../Pokedex.css";

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
          <button className="pages" onClick={goToPreviousPage}>
            {"<<"}
          </button>
          {displayPages.map((page) => {
            const isActiveClass = currentPage === page ? "active" : "";

            return (
              <button
                key={page}
                onClick={() => {
                  goToPage(page);
                }}
                className={`${isActiveClass} pages`}
              >
                {page}
              </button>
            );
          })}
          <button className="pages" onClick={goToNextPage}>
            {">>"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Pokedex;
