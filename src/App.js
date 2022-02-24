import React from 'react';
import { makeStyles } from '@mui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Profile from './Pages/Profile';
import Home from './Pages/Home';

function App() {
  const user = null;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (
            <Login />
          ) : (
            <Switch>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/checkout'>
                <Paypal />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111"
  }
}));

export default App;
