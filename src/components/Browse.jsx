import Header from "./Header";
import useTopAnime from "../hooks/useTopAnime";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useRecommendAnime from "../hooks/useRecommendAnime";
import useSchedulesAnime from "../hooks/useSchedulesAnime";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptShowing = useSelector((store) => store.gpt.showGpt);
  useTopAnime();
  useRecommendAnime();
  useSchedulesAnime();

  return (
    <div>
      <Header />

      {gptShowing ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
