import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email=" + email);
  };
  return (
    <div className="relative hero-bg">
      {/* NavBar */}
      <header className="flex justify-between items-center mx-auto p-4 max-w-6xl">
        <Link to={"/"}>
          <img src="/flickpick.png" alt="Logo" className="w-52" />
        </Link>
        <Link to={"/login"} className="bg-red-600 px-2 py-1 rounded text-white">
          Login
        </Link>
      </header>
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center mx-auto py-40 max-w-6xl text-center text-white">
        <h1 className="mb-4 font-bold text-4xl md:text-6xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="mb-4 font-bold text-4xl md:text-6xl">
          Watch anywhere. Cancel anytime
        </p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {/* for this the button and text beside each other in laptop but under each other in mobile */}
        <form
          className="flex md:flex-row flex-col gap-4 w-1/2"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 border-gray-700 bg-black/80 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="flex justify-center bg-red-600 px-2 px-6 py-1 md:py-2 rounded text-xl lg:text-2xl lg:">
            Get Started
            {/* Arrow to the right */}
            <ChevronRight className="size-8 md: size-10" />
          </button>
        </form>
      </div>

      {/* separator  */}
      <div className="bg-[#232323] w-full h-2" aria-hidden="true" />

      {/* 1st Section */}
      <div className="bg-black py-10 text-white">
        {/* flex will be col in small but row in medium screen */}
        <div className="flex md:flex-row flex-col justify-center items-center mx-auto px-4 md:px-2 max-w-6xl">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 font-extrabold text-4xl md:text-5xl">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          {/* right side */}
          <div className="relative flex-1">
            <img src="/tv.png" alt="TV Image" className="relative z-20 mt-4" />
            <video
              className="top-1/2 left-1/2 z-0 absolute h-1/2 -translate-x-1/2 -translate-y-1/2"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* separator  */}
      <div className="bg-[#232323] w-full h-2" aria-hidden="true" />
      {/* 2nd Section */}
      <div className="bg-black py-10 text-white">
        <div className="flex md:flex-row flex-col-reverse justify-center items-center mx-auto px-4 md:px-2 max-w-6xl">
          {/* left side */}
          <div className="relative flex-1">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="Stranger Things img"
                className="mt-4"
              />
            </div>
            <div className="bottom-5 left-1/2 absolute flex items-center gap-2 border-slate-500 bg-black px-2 rounded-md w-3/4 lg:w-1/2 h-24 -translate-x-1/2">
              <img
                src="/stranger-things-sm.png"
                alt="Stranger Things small img"
                className="h-full"
              />
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-0">
                  <span className="font-bold text-md lg:text-lg">
                    Stranger Things
                  </span>
                  <span className="text-blue-500 text-sm">Downloading....</span>
                </div>
                <img src="/download-icon.gif" alt="download" className="h-12" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 font-extrabold text-4xl text-balance md:text-5xl">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      {/* separator  */}
      <div className="bg-[#232323] w-full h-2" aria-hidden="true" />
      {/* 3rd Section */}

      <div className="bg-black py-10 text-white">
        {/* flex will be col in small but row in medium screen */}
        <div className="flex md:flex-row flex-col justify-center items-center mx-auto px-4 md:px-2 max-w-6xl">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 font-extrabold text-4xl md:text-5xl">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          {/* right side */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="/device-pile.png"
              alt="Device Image"
              className="relative z-20 mt-4"
            />
            <video
              className="top-2 left-1/2 z-0 absolute max-w-[63%] h-4/6 -translate-x-1/2"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* separator  */}
      <div className="bg-[#232323] w-full h-2" aria-hidden="true" />

      {/* 4th Section */}
      <div className="bg-black py-10 text-white">
        <div className="flex md:flex-row flex-col-reverse justify-center items-center mx-auto max-w-6xl">
          <div className="relative flex-1">
            <img src="/kids.png" alt="Enjoy on your TV" className="mt-4" />
          </div>
          {/* right */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 font-extrabold text-4xl md:text-5xl">
              Create profiles for kids
            </h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them — free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
