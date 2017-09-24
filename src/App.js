import React, { Component } from 'react'
import Loadable from 'react-loadable';
import { 
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';

const HomePage = () => (
  <div className="App">
    Home Page
  </div>
);

const Loading = () => (
  <h1>CARREGANDO ESSA BAGAÇA</h1>
)

const Home = Loadable({
  loader: () => import('./components/SearchBar/index'),
  delay: 20000,
  loading: Loading
})

const About = () => (
  <div>
    About Page
  </div>
);

const Blog = () => (
  <div>
    Blog Page
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>    
          <Link to="/about">About</Link>    
          <Link to="/blog">Blog</Link>    
          <hr />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
