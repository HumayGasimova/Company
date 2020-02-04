/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

/**
* Components
*/

import Main from './components/main';
import AboutUs from './components/Pages/AboutUs/aboutUs';

/**
* Styles
*/

import './app.scss';


/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
         <div className="app">
            <Switch>
               {/* <Route 
                  exact 
                  path="/contact"
                  // component={ AboutPage }
               />
               <Route 
                  exact 
                  path="/locations"
                  // component={ AboutPage }
               />
               <Route 
                  exact 
                  path="/our-story"
                  // component={ AboutPage }
               />
               <Route 
                  exact 
                  path="/food-drink"
                  // component={ AboutPage }
               />
               <Route 
                  exact 
                  path="/about-us"
                  component={ AboutUs }
               /> */}
               <Route 
                  exact
                  path="/crypto-cafe"
                  component={ Main }
               />
               <Redirect from="/" to="/crypto-cafe"/>
            </Switch>
         </div>
      );
   }
}

export default App;
