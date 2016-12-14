import React,{Component, PropTypes} from 'react';
import App from './App';
import Home from './home';
import User from './User';
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router';


    class Routers extends React.Component {
      render () {
        return(
          <div>
          <Router history={hashHistory}>
            <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="user/:_id" component={User}/>
            </Route>
         </Router>
       </div>
        )
      }
    }

    export default Routers;
