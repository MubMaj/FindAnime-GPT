import { useEffect } from "react";
import { RecommendAnime } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRecommendAnime } from "../utils/animeSlice";

const useRecommendAnime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RecommendAnime);
      const json = await response.json();
      dispatch(addRecommendAnime(json.data));
    };
    fetchData();
  }, []);
};

export default useRecommendAnime;