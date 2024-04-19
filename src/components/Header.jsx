import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGpt } from "../utils/gptSlice";
import { svgPath } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const gptShowing = useSelector((store) => store.gpt.showGpt);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlegptSearch = () => {
    dispatch(toggleGpt());
  };

  return (
    <div className="px-10 bg-gradient-to-br max-sm:pb-8 from-black flex justify-between max-sm:flex-col items-center">
      <div className="max-sm:mb-4">
        <svg className="w-36 my-5 fill-orange-500" viewBox="0 0 136 24">
          <title id="animeGpt">Anime GPT</title>
          <path d={svgPath}></path>
        </svg>
      </div>
      {user && (
        <div className="flex gap-20">
          <button
            className="text-white items-center flex gap-2 bg-gray-600 rounded-lg"
            onClick={handlegptSearch}
          >
            <div className="w-12">
              <img
                className="rounded-l-lg"
                src="https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png"
                alt="icon"
              />
            </div>
            <span className="pr-2 font-medium">
              {gptShowing ? "HOME" : "GPT Search"}
            </span>
          </button>
          <div className="flex flex-col rounded-full">
            <button
              onClick={() => {
                setisMenuOpen(!isMenuOpen);
              }}
            >
              <img
                className="w-12 rounded-full hover:animate-spin"
                alt="usericon"
                src="https://static.crunchyroll.com/assets/avatar/170x170/egghead-luffy.png"
              />
            </button>
            {isMenuOpen && (
              <ul className="flex flex-col absolute top-16 max-sm:top-36 right-10 max-sm:right-20 border-2 border-red-500 text-white font-semibold bg-orange-500 text-center rounded-xl signOutOptions mt-3">
                <li className="p-3 cursor-default text-gray-300">
                  {user?.displayName}
                </li>
                <li
                  className="hover:bg-red-500 p-3 rounded-b-lg cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
