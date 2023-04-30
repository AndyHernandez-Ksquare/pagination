import { useState, useEffect } from "react";
import { IInfoPokemon, IListResults, Pagination } from "../interfaces";

const usePagination = (): Pagination => {
  const [pokemons, setPokemons] = useState<IInfoPokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      const limit = 9;
      const offset = (currentPage - 1) * limit;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data: IListResults<IInfoPokemon> = await response.json();
      setPokemons(data.results);
      setTotalPages(Math.ceil(data.count / limit));
    };
    fetchPokemons();
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Logic for the pagination numbers
  const displayPages = [];
  const pageLimit = 10;
  let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
  let endPage = startPage + pageLimit - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pageLimit + 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    displayPages.push(i);
  }

  return {
    pokemons,
    currentPage,
    totalPages,
    displayPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  };
};

export default usePagination;
