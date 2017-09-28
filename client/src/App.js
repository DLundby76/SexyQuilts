import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './home/homePage.js';
import About from './about';
import Shop from './shop';
import Contact from './contact';
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
          <Route  exact path='/about' component={About}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>

      </div>
    );
  }
}

export default App;
