import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { setContentType } = useContentStore();

  return (
    <header className="flex flex-wrap justify-between items-center mx-auto p-4 max-w-6xl h-20">
      <div className="z-50 flex items-center gap-10">
        <Link to="/">
          <img
            src="/netflix-logo.png"
            alt="Netflix Logo"
            className="w-32 sm:w-40"
          />
        </Link>

        {/* desktop navbar items */}
        <div className="sm:flex items-center gap-7 hidden">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("tv")}
          >
            Tv Shows
          </Link>
          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className="z-50 flex items-center gap-6">
        <Link to={"/search"}>
          <Search className="cursor-pointer size-6" />
        </Link>
        <img
          src={user.image}
          alt="Avatar"
          className="rounded h-8 cursor-pointer"
        />
        <LogOut className="cursor-pointer size-6" onClick={logout} />
        <div className="sm:hidden">
          <Menu className="cursor-pointer size-6" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* mobile navbar items */}
      {isMobileMenuOpen && (
        <div className="z-50 border-gray-800 sm:hidden bg-black mt-4 border rounded w-full">
          <Link
            to={"/"}
            className="block p-2 hover:underline"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className="block p-2 hover:underline"
            onClick={toggleMobileMenu}
          >
            Tv Shows
          </Link>
          <Link
            to={"/history"}
            className="block p-2 hover:underline"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
};
export default Navbar;
