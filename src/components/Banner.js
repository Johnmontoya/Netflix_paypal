import React from 'react'
import { makeStyles } from '@mui/styles';
import HeroBanner from "../images/netflix-features.jpg"
import { Button, Typography } from '@mui/material';

const Banner = () => {
  const classes = useStyles();
  const truncate = (string, n) => {
    if(string?.length > n){
      return `${string.substr(0, n-1)}...`
    } else {
      return (string)
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          Movie Title
        </Typography>
        <div className={classes.buttons}>
          <Button>Reproducir</Button>
          <Button>Mi Lista</Button>
        </div>
        <Typography style={{ wordWrap: "break-word" }} variant="h6" className={classes.description}>
          {
            truncate("Movie description", 60)
          }          
        </Typography>
        <div className={classes.faedBottom} />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${HeroBanner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff"
  },
  buttons: {
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