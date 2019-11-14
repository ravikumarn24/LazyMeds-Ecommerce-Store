import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import MenuBar from './components/MenuBar'
import Cart from './components/Cart'
import ProductGrid from'./components/ProductGrid'
import Contact from './components/Contact'
import Error from './components/Error'
import classNames from 'classnames'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import "bootstrap/dist/js/bootstrap.min.js"
import SearchBar from './components/SearchBar';

const paginated_size = 5;
class App extends React.Component {
  render() {
     return (
        <React.Fragment>
           <MenuBar/>
           <Switch>
              <Route exact path="/" component={ProductGrid}/>
              <Route exact path="/Cart" component={Cart}/>
              <Route exact path="/Contact" component={Contact}/>
              <Route component={Error} />
           </Switch>
        </React.Fragment>
     );
  }
}
class Header extends React.Component {
  render() {
     return (
            <div className="App-header">
              <Menu/>
            </div>
     );
  }
}

class Menu extends React.Component {
  render() {
    let right_elements=classNames("Menu-element","Right-oriented")
    return (
             <div className="App-menu">
               <ul className="Menu-bar">
                 <li className="Menu-element"><a href="/index.html">Home</a></li>
                 <li className="Menu-element"><a href="/index.html">Contact</a></li>
                 <li className="Menu-element" ><a href="https://wa.me/918248161684">
                    <img src="/whatsapp.png" className="Whatsapp-logo"/>
                    </a>
                  </li>
                </ul>
              </div>
    );
 }
}
class Content extends React.Component {
  render() {
     return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}
export default App;
