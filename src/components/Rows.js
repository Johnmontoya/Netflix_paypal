import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import axios from 'axios';

const Rows = ({ title, fetchUrl, isLargeRow}) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      //console.log(request.data.results)
      return request
    }

    fetchData();
  }, [fetchUrl])

  return (
    <div className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <div className={classes.posters}>
        {
          movies.map((movie) => ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) &&(
              <img
                className={`${classes.poster} ${
                  isLargeRow && classes.posterLarge
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
              />
            ))
        }
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginLeft: "40px"
  },
  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  poster: {
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: "10px",
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  posterLarge: {
    maxHeight: "15rem",
    "&:hover": {
      transform: "scale(1.15)"
    }
  }
}));

export default Rows