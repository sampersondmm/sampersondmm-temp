import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import '../css/App.css';


class App extends Component {
  render() {
    const landing = () => (<Landing />);
    const about = () => (<About />);
    const projects = () => (<Projects />);
    const blog = () => (<Blog />);
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/blog' component={blog}></Route>
          <Route path='/projects' component={projects}></Route>
          <Route path='/about' component={about}></Route>
          <Route path='/' component={landing}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
