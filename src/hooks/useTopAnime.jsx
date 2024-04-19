import { useEffect } from "react";
import { TopAnimeURL} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopAnime } from "../utils/animeSlice";

const useTopAnime = () => {
  const topAnime = useSelector(store => store.anime.topAnime)
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(TopAnimeURL);
    const json = await response.json();
    dispatch(addTopAnime(json.data));
  };
  useEffect(() => {
    !topAnime && fetchData();
  }, []);
};

export default useTopAnime;