import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { NetflixButton } from '../styled/styledComponents';

const Plans = ({cost, children, color, wide}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant="h5">
        {children}
      </Typography>      
      <NetflixButton color={color} wide={wide}>Subscribirse</NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginBottom: "20px"
    }
  },
  standard: {
    fontSize: "1.2rem"
  }
}));

export default Plans