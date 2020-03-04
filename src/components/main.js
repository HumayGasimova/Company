/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
 } from 'react-router-dom';

/**
* Styles
*/

import './main.scss';

/**
* Components
*/

import AboutUs from './Pages/About/about';

/**
* Actions
*/

import * as Actions from '../actions';

/**
* Selectors
*/

import * as Selectors from '../reducers/selectors';

/**
* Main component definition and export
*/

export const Main = (props) => {

    /**
    * Methods
    */

    useEffect(() => {

    }, [])

    /**
    * Markup
    */

    return(
        <div>
            {/* <Toolbar/>
            <Sidebar/> */}
            <Switch>
                <Route 
                    exact 
                    path={props.match.url + "/about"}
                    component={AboutUs}
                />
            </Switch>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // archievesMonths: Selectors.getArchievesMonthState(state),
            // gallery: Selectors.getGalleryState(state),
        };
    },
    (dispatch) => {
        return {
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            // startInitStories: bindActionCreators(Actions.startInitStories, dispatch),
            // initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch),
            // startInitArchieves: bindActionCreators(Actions.startInitArchieves, dispatch),
            // startInitCategories: bindActionCreators(Actions.startInitCategories, dispatch),
            // startInitRecentPosts: bindActionCreators(Actions.startInitRecentPosts, dispatch),
        };
    }
)(Main);
 