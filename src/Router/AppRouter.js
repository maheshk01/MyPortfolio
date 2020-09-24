import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import About from '../Component/About';
import Header from '../Component/Header';
import Education from '../Component/Education';
import NotFoundPage from '../Component/NotFoundPage';
import HomePage from '../Component/HomePage';
import Skills from '../Component/Skills';
import Achievements from '../Component/Achievements';
import Experience from '../Component/Experience';
import Projects from '../Component/Projects';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills}/>
        <Route path="/Achievements" component={Achievements}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/Projects" component={Projects} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
