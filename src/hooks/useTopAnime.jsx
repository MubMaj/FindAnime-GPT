import { useEffect } from "react";
import { topAnime } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopAnime } from "../utils/animeSlice";

const useTopAnime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(topAnime);
      const json = await response.json();
      dispatch(addTopAnime(json.data));
    };
    fetchData();
  }, []);
};

export default useTopAnime;