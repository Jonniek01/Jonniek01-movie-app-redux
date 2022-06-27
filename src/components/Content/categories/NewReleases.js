import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMovie } from "../../../redux/slices/movieSlice";
import Movie from "../Movie";

function NewReleases() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const movieDetails = axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=8222b1684b29c65228f1078b4745f5af&language=en-US`
  );

  useEffect(() => {
    dispatch(changeMovie([]));
    movieDetails.then((res) => {

      dispatch(changeMovie(res.data.results));
    });
  }, []);
  return (
    <div className="movies-container">
      <h2 className="movies-title">New Releases</h2>

      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default NewReleases;
