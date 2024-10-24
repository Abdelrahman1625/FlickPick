import { useEffect, useRef, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [content, setContent] = useState([]);
  const [showArrows, setShowArrows] = useState(false);

  const sliderRef = useRef(null);

  const formattedCategoryName =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);
  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";
  useEffect(() => {
    const getContent = async () => {
      if (
        [
          "Action & Adventure",
          "Action",
          "Science Fiction",
          "Horror",
          "Western",
          "TV Movie",
          "Thriller",
          "Romance",
          "Animation",
          "Comedy",
          "War",
          "Crime",
          "Documentary",
          "Drama",
          "Family",
          "Kids",
          "Mystery",
          "News",
          "Reality",
          "Sci-Fi & Fantasy",
          "Soap",
          "Talk",
          "Music",
          "History",
          "Fantasy",
          "Adventure",
          "War & Politics",
        ].includes(category)
      ) {
        const res = await axios.get(`/api/v1/${contentType}/genre/${category}`);
        if (category === "Animation") {
          const excludedIds = [95897, 78501, 70998, 99466, 90388];
          setContent(
            res.data.similar.results.filter(
              (content) => !excludedIds.includes(content.id)
            )
          );
        } else {
          setContent(res.data.similar.results);
        }
      } else {
        const res = await axios.get(`/api/v1/${contentType}/${category}`);
        setContent(res.data.content);
      }
    };

    getContent();
  }, [contentType, category]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative bg-[#022837] px-5 md:px-20 text-white"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <h2 className="mb-4 font-bold text-2xl">
        {formattedCategoryName} {formattedContentType}
      </h2>

      <div
        className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        ref={sliderRef}
      >
        {content.map((item) => (
          <Link
            to={`/watch/${item.id}`}
            className="relative min-w-[250px] group"
            key={item.id}
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={SMALL_IMG_BASE_URL + item.backdrop_path}
                alt="Movie image"
                className="group-hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </div>
            <p className="mt-2 text-center">{item.title || item.name}</p>
            <p className="text-center">
              {item?.adult ? (
                <span className="text-red-600">18+</span>
              ) : (
                <span className="text-green-600">PG-13</span>
              )}
              {" | "}
              {item.vote_average.toFixed(1)} ⭐
            </p>
          </Link>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            className="top-1/2 left-5 md:left-24 z-10 absolute flex justify-center items-center bg-[#003245] bg-opacity-50 hover:bg-opacity-75 rounded-full text-white -translate-y-1/2 size-12"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="top-1/2 right-5 md:right-24 z-10 absolute flex justify-center items-center bg-[#003245] bg-opacity-50 hover:bg-opacity-75 rounded-full text-white -translate-y-1/2 size-12"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};
export default MovieSlider;
