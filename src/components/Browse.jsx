import Header from "./Header";
import useTopAnime from "../hooks/useTopAnime";
import MainContainer from "./MainContainer";

const Browse = () => {
  useTopAnime();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
