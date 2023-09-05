import React from 'react';

const GifList = ({ gifs, currentPage, gifsPerPage }) => {
  // Calculate the start and end index of GIFs to display on the current page
  const startIndex = (currentPage - 1) * gifsPerPage;
  const endIndex = startIndex + gifsPerPage;
  const displayedGifs = gifs.slice(startIndex, endIndex);

  return (
    <div className="gif-grid">
      {displayedGifs.map((gif) => (
        <div key={gif?.id} className="gif-item">
          <img src={gif?.images?.fixed_height?.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
};

export default GifList;
