import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Header from '../components/Header';
import NetflixAvatar from "../images/Netflix-avatar.png";
import Plans from "../components/Plans";
import { NetflixButton } from '../styled/styledComponents';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  const signout = (e) => {
      auth.signOut();
      history.push("/login")
  }

  return (
    <>
    <Header />
    <div className={classes.root}>      
      <Typography variant="h3">Editar Perfil</Typography>
      <div className={classes.info}>
        <img src={NetflixAvatar} alt="avatar" />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6"> Email Usuario</Typography>
            <Typography className={classes.plansText} variant="h5" gutterBottom> Subscripción</Typography>
            <Plans 
              cost={5000}>
              Netflix Estandar
            </Plans>
            <Plans 
              cost={10000}>
              Netflix Basic
            </Plans>
            <Plans 
              color="gray"
              wide="mediumWidth"
              cost={15000}>
              Netflix Premium
            </Plans>
            <NetflixButton 
                onClick={signout}
                wide="fullWidth" >Cerrar sesión</NetflixButton>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",      
    }
  },
  details: {
    width: "100%",
    marginLeft: "30px",
    "& h6": {
      backgroundColor: "#aaa",
      padding: "10px",
      marginBottom: "10px",
      fontSize: "18px"
    }
  },
  plans: {
    width: "100%"
  },
  plansText: {
    borderBottom: "1px solid lightgray"
  }
}));

export default Profile