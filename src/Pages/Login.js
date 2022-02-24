import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import logo from "../images/netflix-logo.png"
import HeroBanner from "../images/HeroBanner.jpg"
import { NetflixButton, NetflixInput } from '../styled/styledComponents';
import SignUp from "./SignUp";

const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(true)

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <NetflixButton className={classes.session}>
        Iniciar sesión
      </NetflixButton>
      <div className={classes.info}>
        {
          signIn ? ( <SignUp />) 
          : (
            <>
              <Typography variant="h4" gutterBottom>
                Peliculas, Programas de TV y mucho mas.
              </Typography>
              <Typography variant="h5">
                Miralas donde quieras. Cancela a cualquier hora.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Listo para ver? Ingresa tu email para crear o reiniciar tu membresia.
              </Typography>
              <div className={classes.inputBlock}>
                <NetflixInput placeholder='Ingresa Email'/>
                <NetflixButton>
                  EMPECEMOS!
                </NetflixButton>
              </div>
            </>
          )
        }        
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    backgroundSize: "cover",
    objectFit: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer"
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400
    }
  }
}));

export default Login