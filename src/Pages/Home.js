import React from 'react'
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from '../Request';

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Banner />
      <Rows title="TOP TRENDING" fetchUrl={requests.fetchTrending} isLargeRow />
      <Rows title="TOP RARED" fetchUrl={requests.fetchtest} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
}));

export default Home