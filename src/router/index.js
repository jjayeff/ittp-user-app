import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './home';
import News from './news';
import History from './history';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" hideNavBar />
        <Scene key="news" component={News} title="News" hideNavBar />
        <Scene key="history" component={History} title="History" hideNavBar />
      </Scene> 
    </Router>
  );
};

export default RouterComponent;
