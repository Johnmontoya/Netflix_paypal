import React from 'react'
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import Banner from "../components/Banner";

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
}));

export default Home