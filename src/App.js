import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import SideDrawer from "./components/SideDrawer";
import NavContextProvider from './contexts/NavContext';
import SearchContextProvider from './contexts/SearchContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChartPage from './components/ChartPage';
import About from "./components/About";
import SearchPage from './components/SearchPage';



class App extends Component {
  render() {
 
    return (
      <Router>
        <Switch>
          <NavContextProvider>
            <SearchContextProvider>
              <Route path="/" exact component={MainPage} />
              <Route path="/chartpage" exact component={ChartPage} />
              <Route path="/about" exact component={About} />
              <Route path="/search" exact component={SearchPage} />
            </SearchContextProvider>            
            <SideDrawer />
          </NavContextProvider>
        </Switch>
      </Router>        
    );
  }
}

export default App;
