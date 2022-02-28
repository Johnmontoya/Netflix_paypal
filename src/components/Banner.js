import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import HeroBanner from "../images/netflix-features.jpg"
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import requests from '../Request';

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);

  const truncate = (string, n) => {
    if(string?.length > n){
      return `${string.substr(0, n-1)}...`
    } else {
      return (string)
    }
  }

  useEffect(() => {
    const fetchData = async() => {
      const request = await axios.get(requests.fetchOriginal)
      const random = Math.floor(Math.random() * request.data.results.length - 1)
      setMovie(request.data.results[random])
      return request
    } 
    fetchData()   
  }, [])

  console.log(movie)

  return (
    <div className={classes.root} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Reproducir</Button>
          <Button>Mi Lista</Button>
        </div>
        <Typography style={{ wordWrap: "break-word" }} variant="h6" className={classes.description}>
          {
            truncate(`${movie?.overview}`, 160)
          }          
        </Typography>
        <div className={classes.faedBottom} />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff"
  },
  buttons: {
    marginTop: "30px",
    marginBottom: "20px",
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",  
      padding: "10px 40px 10px 40px",    
      marginRight: "1rem",
      backgroundColor: "rgba(51, 51, 51, 0.5)"
    },
    "& button:hover":{
      color: "#000",
      backgroundColor: "#e6e6e6"
    }
  },
  content: {
    paddingTop: "60px",
    marginLeft:"60px",
    width: "400px"
  },
  faedBottom: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)"
  }
}));

export default Banner