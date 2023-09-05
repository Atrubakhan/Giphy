import React, { useEffect, useState } from "react";
import "./App.css";
import GiphyService from "./GiphyService";
import SearchBar from "./componets/serachBar";
import GifList from "./componets/GifList";
import Pagination from "./componets/Pagination";

function App() {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gifsPerPage = 10;

  useEffect(() => {
    GiphyService.getTrendingGifs()
      .then((data) => {
        setTrendingGifs(data);
      })
      .catch((error) => {
        console.error("Error fetching GIFs:", error);
      });
  }, []);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setTrendingGifs([]);
      return;
    }

    GiphyService.searchGifs(query)
      .then((data) => {
        setTrendingGifs(data);
      })
      .catch((error) => {
        console.error("No GIFs:", error);
      });
  };

  return (
    <div className="App">
      <h1>GIF Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <GifList
        gifs={trendingGifs}
        currentPage={currentPage}
        gifsPerPage={gifsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(trendingGifs.length / gifsPerPage)}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}

export default App;
