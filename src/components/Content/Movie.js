import React ,{ useState } from 'react'
import "./Movies.css"
import StarRatings from 'react-star-ratings';
import {AiFillYoutube} from "react-icons/ai";
// 

function Movie(props) {
  const url = "https://image.tmdb.org/t/p/original/";
  const [iconc,setIconc]=useState("icon-none")
  return (
    <div onMouseEnter={()=>setIconc("video-icon") } onMouseLeave={()=>setIconc("icon-none")}  className="movie">
      <img src={`${url}/${props.movie.backdrop_path}`} alt="" className="movie-pic" />
      <div className="movie-details">
        <h4 className="movie-title">{props.movie.title}</h4>
        <div className="movie-adds">
          <StarRatings
            className="movie-rating"
            rating={props.movie.vote_average/2}
            starRatedColor="blue"
            starDimension='13px'
            numberOfStars={5}
            name="rating"
          />
          <p className="movie-time">
            {props.movie.vote_average}

      
          </p>
        </div>
      </div>
      <div className={iconc} >
        <p><AiFillYoutube style={{color:"white",fontSize:"50px",borderRadius:"100px",opacity:"1"}}/></p>
        <p>Watch now</p>
        </div>
    </div>
  );
}

export default Movie