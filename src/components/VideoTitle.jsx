import React from "react";

const VideoTitle = ({ title_english, title, synopsis }) => {
  return (
    <div className="w-full h-screen max-sm:pt-[39vh] max-md:pt-96 max-sm:pl-7 pt-64 pl-20 text-white bg-gradient-to-tr from-black">
      <div className="flex flex-col gap-3">
        <h2
          className="max-sm:text-base font-bold text-3xl"
          style={{ "textShadow": "4px 4px black" }}
          >
          {title_english}
        </h2>
        <h4 className="max-sm:hidden font-bold text-xl drop-shadow-xl" style={{ "textShadow": "4px 4px black" }}>{title}</h4>
        <p className="max-sm:text-xs max-sm:w-8/12 max-sm:line-clamp-2 text-wrap text-sm line-clamp-4 w-3/12 text-justify">{synopsis}</p>
      </div>
      <div className="mt-4 text-sm">
        <button className="max-sm:font-thin max-sm:text-xs max-sm:p-1 border-2 border-black bg-orange-500 font-semibold px-4 py-2">
          ▶️ START WATCHING S1 E1
        </button>
        <span className="max-sm:hidden font-semibold text-sm px-2">More Info...</span>
      </div>
    </div>
  );
};

export default VideoTitle;
