import { useRef, useState } from "react";
import Header from "./Header";
import { cheackValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import bgImage from "../assets/img/background-desktop@2x.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMassage, setErrMassage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    // Validate a form
    const massage = cheackValidData(
      email.current.value,
      password.current.value
    );
    setErrMassage(massage);

    if (massage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate('/browse')
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMassage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode || errorMessage) {
            setErrMassage("Wrong Email/Password");
          }
        });
    }
  };

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="text-white flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col rounded-xl items-center w-3/12 bg-black bg-opacity-60 px-5 py-10 mt-14"
        >
          <h1 className="font-bold text-3xl mb-6 ms-3 self-start cursor-default">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-red-500 font-bold text-lg self-start ms-3">
            {errMassage}
          </p>
          {!isSignInForm && (
            <input
              ref={name}
              id="name"
              type="text"
              placeholder="Name"
              className="p-2 m-2 w-11/12 rounded-sm bg-gray-700"
              required
            />
          )}
          <input
            autoComplete="email"
            id="email"
            ref={email}
            type="email"
            placeholder="something@domin.com"
            className="p-2 m-2 w-11/12 rounded-sm bg-gray-700"
          />
          <input
            id="password"
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-11/12 rounded-sm bg-gray-700"
          />
          <button
            className="p-2 m-2 font-bold bg-orange-500 text-black w-11/12 mt-9 hover:bg-red-600 hover:text-white rounded-lg"
            onClick={handleBtnClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 self-start cursor-default">
            {isSignInForm
              ? "New here? Click here to "
              : "Already a User? Click here to "}
            <span
              className="text-orange-500 cursor-pointer hover:text-red-700"
              onClick={toggelSignInForm}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
      <div className="fixed top-0 left-0 -z-10">
        <img
          srcSet={bgImage}
          alt="hero"
          className="object-cover w-screen h-screen"
        ></img>
      </div>
    </div>
  );
};

export default Login;
