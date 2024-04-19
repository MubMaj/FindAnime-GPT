import { useEffect } from "react";
import { SchedulesAnimeURL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSchedulesAnime } from "../utils/animeSlice";

const useSchedulesAnime = () => {
  const schedulesAnime = useSelector((store) => store.anime.schedulesAnime);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch(SchedulesAnimeURL);
    const json = await response.json();
    dispatch(addSchedulesAnime(json.data));
  };

  useEffect(() => {
    !schedulesAnime && fetchData();
  }, []);
};

export default useSchedulesAnime;
