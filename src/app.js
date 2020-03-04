/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

/**
* Components
*/

import Main from './components/main';
import About from './components/Pages/About/about';
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
               <Route 
                  exact 
                  path={"/about"}
                  component={About}
               />
               <Redirect exact from="/" to="/about"/>
            </Switch>
         </div>
      );
   }
}

export default App;
