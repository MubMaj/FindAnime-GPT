import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ title, animes }) => {
  return (
    <div>
      <div className="px-6 pb-6 text-white">
        <h1 className="text-3xl max-sm:text-xl font-semibold py-4">{title}</h1>
        <div className="flex gap-6 overflow-x-scroll no-scrollbar">
          {animes &&
            animes.map((item, index) => (
              <AnimeCard
                key={index}
                anime={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
