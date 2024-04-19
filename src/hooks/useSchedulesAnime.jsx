import { useEffect } from "react";
import { SchedulesAnime } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSchedulesAnime } from "../utils/animeSlice";

const useSchedulesAnime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SchedulesAnime);
      const json = await response.json();
      dispatch(addSchedulesAnime(json.data));
    };
    fetchData();
  }, []);
};

export default useSchedulesAnime;