import React from "react";

type Props = {
  currentPage: number;
  displayPages: number[];
  totalPages: number;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
};

const Pagination = ({
  totalPages,
  displayPages,
  currentPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
}: Props) => {
  return (
    <section>
      {totalPages! > 1 && (
        <div className="pagination">
          <button className="pages" onClick={goToPreviousPage}>
            {"<<"}
          </button>
          {displayPages!.map((page) => {
            const isActiveClass = currentPage === page ? "active" : "";

            return (
              <button
                key={page}
                onClick={() => {
                  goToPage!(page);
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

export default Pagination;
