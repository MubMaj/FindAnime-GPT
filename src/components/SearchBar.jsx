import { useRef } from "react";
import bgImage from "../assets/img/background-desktop@2x.png";
import { AiHeaderKeys, openApiURL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addGptAnimeResult} from "../utils/gptSlice"
// import openai from "../utils/openAi"

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const filterSearch = async (anime) => {
    const data = await fetch("https://api.jikan.moe/v4/anime?q=" + anime);
    const json = await data.json();
    return json.data;
  };

  const handleGptSearch = async () => {

    // console.log(searchText.current.value);

    const optQuery =
      "Act as a Anime recommendation system and suggest some Anmie for the query:" +
      searchText.current.value +
      "only give me name of 3 anime, comma seprated like the `Example Result` i dont want any details of anythig just tell the name of the anime according to the `query` without saying any other words, dont say stuff like `Sure! Here are bla bla bla` just give me an array of 3 anime name like this dont even use `'` or even full stop at the end just give the result as shown . Example Result: Attack on Titan, My Hero Academia, One Piece and i Repeat please dont say another word accept the name of the animes";

    const url = openApiURL;
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
    // console.log(result.result);


    const sortAnime = result?.result?.split(",");

    const allPromise = sortAnime.map((res) => filterSearch(res));

    const finalResult = await Promise.all(allPromise);
    dispatch(addGptAnimeResult({animeNames:sortAnime, animeResults:finalResult}));
    
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: optQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(chatCompletion.choices);

  };

  return (
    <div className="flex justify-center pt-[3%] max-sm:pt-[10%]">
      <div className="fixed top-0 left-0 -z-10">
        <img
          srcSet={bgImage}
          alt="hero"
          className="object-cover w-screen h-screen"
        ></img>
      </div>
      <form
        className="w-2/3 max-sm:w-screen m-8 max-sm:m-1 p-4 max-sm:p-2 gap-4 grid grid-cols-12 items-center justify-center bg-black border border-gray-700 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 py-2 max-sm:text-lg text-xl col-span-9 rounded-lg"
          type="text"
          placeholder="Find your Anime 😎"
        />
        <button
          className="py-1.5 max-sm:text-lg col-span-3 text-white font-semibold text-2xl bg-purple-900  rounded-lg hover:bg-orange-500"
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
