import { useRef } from "react";
import bgImage from "../assets/img/background-desktop@2x.png";
import { AiHeaderKeys } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addGptAnimeResult} from "../utils/gptSlice"

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const filterSearch = async (anime) => {
    const data = await fetch("https://api.jikan.moe/v4/anime?q=" + anime);
    const json = await data.json();
    return json.data;
  };

  const handleGptSearch = async () => {

    const optQuery =
      "Act as a Anime recommendation system and suggest some Anmie for the query:" +
      searchText.current.value +
      "only give me name of 3 anime, comma seprated like the `Example Result` i dont want any details of anythig just tell the name of the anime according to the `query` without saying any other words, dont say stuff like `Sure! Here are bla bla bla` just give me an array of 3 anime name like this. Example Result: Attack on Titan, My Hero Academia, One Piece";

    const url = "https://open-ai21.p.rapidapi.com/chatbotapi";
    const options = {
      method: "POST",
      headers: AiHeaderKeys,
      body: JSON.stringify({
        bot_id:
          "OEXJ8qFp5E5AwRwymfPts90vrHnmr8yZgNE171101852010w2S0bCtN3THp448W7kDSfyTf3OpW5TUVefz",
        messages: [
          {
            role: "user",
            content: optQuery,
          },
        ],
        user_id: "",
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
        model: "matag2.0",
      }),
    };

    const gptResponse = await fetch(url, options);
    const result = await gptResponse.json();

    console.log(result.result);

    const sortAnime = result?.result.split(",");

    const allPromise = sortAnime.map((res) => filterSearch(res));

    const finalResult = await Promise.all(allPromise);
    dispatch(addGptAnimeResult({animeNames:sortAnime, animeResults:finalResult}));
  };

  return (
    <div className="flex justify-center pt-[3%]">
      <div className="fixed top-0 left-0 -z-10">
        <img
          srcSet={bgImage}
          alt="hero"
          className="object-cover w-screen h-screen"
        ></img>
      </div>
      <form
        className="w-2/3 m-8 p-4 gap-4 grid grid-cols-12 items-center justify-center bg-black border border-gray-700 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 py-2 text-xl col-span-9 rounded-lg"
          type="text"
          placeholder="What type of Anime you are looking for 🤔"
        />
        <button
          className="py-1.5 col-span-3 text-white font-semibold text-2xl bg-purple-900  rounded-lg hover:bg-orange-500"
          type="submit"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
