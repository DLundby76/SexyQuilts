import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './home/homePage.js';
import About from './about';
import Navbar from './components/navbar';


class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        users:[]
      }
    }
    componentDidMount(){

    }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>

      </div>
    );
  }
}

export default App;
