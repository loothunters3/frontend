import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './utils/privateRoute';
import Welcome from './components/welcome';
import Register from './components/register';
import LogIn from './components/logIn';
import ChooseACharacter from './components/chooseACharacter';
import Tutorial from './components/tutorial';
import Play from './components/play';

const App = () => {
  return (
    <>
      <Route exact path='/' component={Welcome} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={LogIn} />
      <PrivateRoute path='/select' component={ChooseACharacter} />
      <PrivateRoute path='/tutorial' component={Tutorial} />
      <PrivateRoute path='/play' component={Play} />
    </>
  );
};

export default App;
