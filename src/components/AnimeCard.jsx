import React from "react";

const AnimeCard = ({ anime }) => {
  const { images, title, genres, status } = anime;
  return (
    <div>
      <div className="w-56 max-sm:w-20 max-sm:h-32 h-[21rem]">
        <img
          className="h-full w-full"
          alt="anime Name"
          src={images?.jpg?.large_image_url}
        />
      </div>
      <div className="mt-3">
        <h3 className="my-1 line-clamp-1 text-lg max-sm:text-sm font-semibold">{title}</h3>
        <h2 className="line-clamp-1 max-sm:text-xs text-gray-400">
          {genres.map((res) => res.name + " ")}
        </h2>
        <h3 className="line-clamp-1 max-sm:text-xs text-gray-600">{status}</h3>
      </div>
    </div>
  );
};

export default AnimeCard;
