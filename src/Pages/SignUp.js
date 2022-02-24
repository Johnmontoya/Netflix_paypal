import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { NetflixButton, NetflixInput } from '../styled/styledComponents';


const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" align='left'>
        Iniciar sesión
      </Typography>
      <form className={classes.form}>
        <NetflixInput placeholder='Email' className={classes.email}/>
        <NetflixInput placeholder='Contraseña' className={classes.password}/>
        <NetflixButton wide="fullWidth" radius> Iniciar sesión </NetflixButton>
        <Typography variant="subtitle2">
          Ahora a Netflix ?{" "}
          <span className={classes.SignupLink}>
            Registrarse Ahora.{" "}
          </span>
        </Typography>
      </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0, 0, 0, 0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: "80%"
  },
  email: {
    marginBottom: "20px"
  },
  password: {
    marginBottom: "40px"
  },
  SignupLink: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export default SignUp