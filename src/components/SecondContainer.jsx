import React from "react";
import AnimeList from "./AnimeList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const animes = useSelector((store) => store?.anime);

  return animes.topAnime && ( 
    <div className="bg-black">
    <div className="top-[-30vh] px-12 relative">
      <AnimeList title={"Anime For You"} animes={animes.recommendAnime} />
      <AnimeList title={"Top Shows"} animes={animes.topAnime} />
      <AnimeList title={"New Anime"} animes={animes.schedulesAnime} />
    </div>
    </div>
  );
};

export default SecondContainer;
