import { useSelector } from "react-redux";
import AnimeList from "./AnimeList";

const GptResponse = () => {
  const { animeNames, animeResults } = useSelector((store) => store.gpt);

  if (!animeNames) return null;

  return (
    <div className="flex justify-center">
      <div className="w-5/6 bg-black text-white px-12 opacity-85">
          {animeNames.map((anime, index) => <AnimeList key={anime} title={anime} animes={animeResults[index]} />) }
      </div>
    </div>
  );
};

export default GptResponse;
