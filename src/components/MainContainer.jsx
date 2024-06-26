import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const animes = useSelector((store) => store?.anime?.recommendAnime);

  if (!animes) return;
  
  const mainAnime = animes[0];

  if (!mainAnime) return;
  


  const { title_english, title, synopsis, trailer } = mainAnime;

  return (
    <div className="relative -mt-[19vh] bg-black z-[-6]">
      <VideoTitle title_english={title_english} title={title} synopsis={synopsis} />
      <VideoBackground trailer={trailer} />
    </div>
  );
};

export default MainContainer;
