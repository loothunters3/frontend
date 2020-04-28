import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Register from './components/register';
import LogIn from './components/logIn';
import Tutorial from './components/tutorial';
import Play from './components/play';

const App = () => {
  return (
    <>
      <Route exact path='/' component={Welcome} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={LogIn} />
      <Route path='/tutorial' component={Tutorial} />
      <Route path='/play' component={Play} />
    </>
  );
};

export default App;
