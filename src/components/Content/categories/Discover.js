import axios from "axios";
import React, { useEffect } from "react";
import Movie from "../Movie";
import { useSelector, useDispatch } from "react-redux";
import { changeMovie } from "../../../redux/slices/movieSlice";

function Discover() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const movieDetails = axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=8222b1684b29c65228f1078b4745f5af`
  );

  useEffect(() => {
    dispatch(changeMovie([]));

    movieDetails.then((res) => {
      dispatch(changeMovie(res.data.results));
    });
  }, []);
  return (
    <div className="movies-container">
      <h2 className="movies-title">Discover</h2>
      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Discover;
