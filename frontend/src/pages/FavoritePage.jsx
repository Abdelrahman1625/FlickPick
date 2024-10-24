import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { X } from "lucide-react";

function limitWords(str, maxWords) {
    let words = str.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return str;
}
function getRatingClass (rating) {
    if (rating >= 8) {
        return "bg-green-500"; // High rating
    } else if (rating >= 5) {
        return "bg-yellow-500"; // Medium rating
    } else {
        return "bg-red-500"; // Low rating
    }
    
}
function FavoritePage() {
    const [favorite , setFavorite] = useState([]);
    const handleDelete = async (entry) => {
        try {
            await axios.delete(`/api/v1/person/favorites/${entry.id}`);
            setFavorite((s) => s.filter((item) => item.id !== entry.id ));
            toast.error(`${entry.title} has been removed successfully.`)
        } catch (error) {
            toast.error("Failed to delete search item");
            console.log(error)
        }
    };
    useEffect(()=>{
        const getFavorite = async () => {
            try {
                
                const res = await axios.get("/api/v1/person/favorites");
                const favRes = res.data.data.map((element) => {
                    return {
                        id: element.content.id,
                        title: element.content.title || element.content.name,
                        img: element.content.poster_path,
                        overview: element.content.overview,
                        rating: element.content.vote_average
                    }
                });
                setFavorite(favRes);
            } catch (error) {
                console.log(error.message);
                setFavorite([]);
            }
        };
        getFavorite();
    } , []);
    if (favorite.length === 0) {
        return (
            <div className="bg-black min-h-screen text-white">
                <Navbar />
                <div className="mx-auto px-4 py-8 max-w-6xl">
                <h1 className="mt-5 mb-8 font-bold text-3xl">Favorites</h1>
                <div className="flex justify-center items-center h-96">
                    <p className="text-xl">No Favorite found</p>
                </div>
                </div>
            </div>
            );
        }
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar/>
            <div className="mx-auto px-4 py-8 max-w-6xl">
            <h1 className="mt-5 mb-8 font-bold text-3xl">Favorites</h1>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {favorite.map((entry) => {
                    return(
                        <div key={entry.id}
                        className="flex items-start bg-gray-800 p-4 rounded">
                            <img
                                src={SMALL_IMG_BASE_URL + entry.img}
                                alt="History Image"
                                className="mr-4 rounded-full object-cover size-16"
                            />
                            
                            <div className="flex flex-col">
                                <span className="text-lg text-white">
                                    <Link to={`${`/watch/${entry?.id}`}`}>{entry.title}</Link>
                                    <span className={`text-sm text-white ml-2 bg-green-400 rounded p-0.5  ${getRatingClass(entry.rating)}`}>
                                        {entry.rating.toFixed(1)}
                                    </span>
                                    
                                </span>
                                <span className="text-sm text-white mt-2">
                                    {limitWords(entry.overview , 30)}
                                </span>
                            </div>
                            <span>
                                <X
                                    className="ml-4 hover:text-red-600 cursor-pointer size-5 hover:fill-red-600 "
                                    onClick={() => handleDelete(entry)}
                                />
                            </span>
                        </div>
                        
                    )
                })}
            </div>
            </div>
        </div>
    )
    }

export default FavoritePage
