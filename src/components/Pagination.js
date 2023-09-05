import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  return (
    <div className="pagination-container">
      <div
        alt="prev"
        className="pre-button"
        style={{
          cursor: isFirst ? "default" : "pointer",
          opacity: isFirst ? 0.5 : 1,
        }}
        onClick={() => {
          if (!isFirst) {
            onPageChange(currentPage - 1);
          }
        }}
      >
        Pre{" "}
      </div>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <p
            key={index}
            className="number-page"
            style={{
              color: currentPage === page ? "#5DC7EF" : "black",
              fontWeight: currentPage === page ? 700 : 400,
            }}
            onClick={() => onPageChange(page)}
          >
            {page}
          </p>
        );
      })}
      <div
        style={{
          cursor: isLast ? "default" : "pointer",
          opacity: isLast ? 0.5 : 1,
        }}
        onClick={() => {
          if (!isLast) {
            onPageChange(currentPage + 1);
          }
        }}
        className="pre-button"
      >
        next
      </div>
    </div>
  );
};

export default Pagination;
