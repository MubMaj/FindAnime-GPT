import { useEffect } from "react";
import { RecommendAnimeURL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRecommendAnime } from "../utils/animeSlice";

const useRecommendAnime = () => {
  const recommendAnime = useSelector((store) => store.anime.recommendAnime);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(RecommendAnimeURL);
    const json = await response.json();
    dispatch(addRecommendAnime(json.data));
  };

  useEffect(() => {
    !recommendAnime && fetchData();
  }, []);
};

export default useRecommendAnime;
