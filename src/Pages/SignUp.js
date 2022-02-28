import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { NetflixButton, NetflixInput } from '../styled/styledComponents';
import { auth } from "../firebase";
import { useHistory } from 'react-router-dom';


const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .then((authUser) => history.push("/"))
        .catch((err) => alert(err.message))
  }

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => history.push("/"))
        .catch((err) => alert(err.message))
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" align='left'>
        Iniciar sesión
      </Typography>
      <form className={classes.form}>
        <NetflixInput 
            placeholder='Email'
            type='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={classes.email}/>

        <NetflixInput 
            placeholder='Contraseña' 
            type='password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className={classes.password}/>

        <NetflixButton 
            type='submit'
            onClick={signin} 
            wide="fullWidth" 
            radius> Iniciar sesión </NetflixButton>
        <Typography variant="subtitle2">
          Ahora a Netflix ?{" "}
          <span className={classes.SignupLink}
                onClick={register}>
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