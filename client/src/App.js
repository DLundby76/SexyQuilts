import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/home/homePage.js';
import About from './containers/about';
import Shop from './containers/shop';
import Contact from './containers/contact';
import Checkout from './containers/checkout';


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
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  exact path='/about' component={About}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/checkout' component={Checkout}/>
        </Switch>

      </div>
    );
  }
}

export default App;
