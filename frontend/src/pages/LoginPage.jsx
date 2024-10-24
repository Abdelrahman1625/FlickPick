import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div className="w-full h-screen hero-bg">
      {/* Header of Navigation*/}
      <header className="flex justify-between items-center mx-auto p-4 max-w-6xl">
        <Link to={"/"}>
          <img src="/flickpick.png" alt="Logo" className="w-40" />
        </Link>
      </header>
      <div className="flex justify-center items-center mx-3 mt-20">
        <div className="space-y-6 bg-[#003245]/60 shadow-md p-8 rounded-lg w-full max-w-md">
          <h1 className="mb-4 font-bold text-2xl text-center text-white">
            Login
          </h1>

          {/* Form of Login which contains email - password*/}

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-white text-sm"
              >
                Email
              </label>
              <input
                type="email"
                className="border-gray-700 bg-transparent mt-1 px-3 py-2 border rounded-md focus:ring w-full text-white focus:outline"
                placeholder="you@email.com"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-white text-sm"
              >
                Password
              </label>
              <input
                type="password"
                className="border-gray-700 bg-transparent mt-1 px-3 py-2 border rounded-md focus:ring w-full text-white focus:outline"
                placeholder="*******"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-[#022837] hover:bg-[#03222f] py-2 rounded-md w-full font-semibold text-white">
              Login
            </button>
          </form>
          <div className="text-center text-gray-400">
            Don't have an account?
            <Link to={"/signup"} className="px-1 text-white underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
