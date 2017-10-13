import React, { Component } from 'react'
import LoadableWrapper from './components/Loading/Loadable';
import { 
  BrowserRouter as Router,
  Route } from 'react-router-dom';
import './assets/css/All.css';

const Layout = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Layout"*/'./components/Layout/'),
});

const Home = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Home"*/'./containers/Home/Home.js'),
});

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </Router>
    );
  }
}

export default App;
