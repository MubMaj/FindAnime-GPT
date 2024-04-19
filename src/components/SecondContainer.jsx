import React from "react";
import AnimeList from "./AnimeList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const animes = useSelector((store) => store?.anime);

  return (
    animes.topAnime && (
      <div className="bg-black">
        <div className="flex place-items-center">
          <div className="mt-[-15vh] max-md:mt-[-40vh] max-sm:-mt-[46vh] pl-12 max-sm:px-2 relative z-20">
            <div className="overflow-y-auto w-[91vw]">
              <AnimeList
                title={"Anime For You"}
                animes={animes.recommendAnime}
              />
              <AnimeList title={"Top Shows"} animes={animes.topAnime} />
              <AnimeList title={"New Anime"} animes={animes.schedulesAnime} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SecondContainer;
