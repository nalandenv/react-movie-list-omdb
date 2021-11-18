import axios from "axios";
import { useEffect, useState } from "react"
import { Thumbnail } from "./Thumbnail";
const BASE_URL = 'http://www.omdbapi.com/?apikey=83bedfa3&s=';

export const Home = ()=>{
    const [movie, setMovie] = useState("");
    const [moviesPerPage, setMoviesPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
        console.log("component did mount");
    },[])
    
    const _handleSearch = async (e:any) => {
        if(!movie) return;
        if(e === "search"){
            setCurrentPage(1);
        }
        const res = await axios.get(`${BASE_URL}${movie}&page=${currentPage}`);
        setMovies(res.data);
        setMovieList(res.data?.Search);
    }
    const _changePage = (e:any) =>{
        if(e === "prev"){
            if(currentPage == 1) return;
            setCurrentPage(currentPage - 1);
        }
        if(e === "next"){
            setCurrentPage(currentPage + 1);
        }
        _handleSearch(e=null);
    }

    return(
        <div className="container">
            <div className="container">
            <h1>Search Movie</h1>
            <input type="text" name="movie" onChange={(e)=>{setMovie(e.target.value)}}/>
            <button name="search" onClick={(e:any)=>{_handleSearch(e.target.name)}}>Search</button>
        </div>
        <div className="search-container mt-5">
            <h2>Showing Results for {movie}</h2>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {movieList.map((movie:any)=>{
                return <Thumbnail Title={movie.Title} Year={movie.Year} key={movie.imdbID} Poster={movie.Poster} />
            })}
            </div>
        </div>
        <div className="navigation mt-1">
            <button name="prev" onClick={(e:any)=>_changePage(e.target?.name)}>PREV</button>
            <button name="next" onClick={(e:any)=>_changePage(e.target?.name)}>NEXT</button>
        </div>
        </div>
    )
}