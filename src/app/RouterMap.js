/**
 * gis routemap
 * @author october.yan
 */
import './Site.less'
import React from 'react'
import { HashRouter as Router, IndexRoute } from 'react-router-dom'
import { Route} from 'react-router'
import HomePage from './pages/HomePage'
import ComponentPage from './pages/ComponentPage'
import TransportationPage from './pages/TransportationPage'
import QuestionPage from './pages/QuestionPage'

const RouteMap = () => {
  return (
    <Router basename="/">
        <div>
          <Route path="/" component={HomePage} exact />
          <Route path="/component" component={ComponentPage} />
          <Route path="/transportation" component={TransportationPage} />
          <Route path="/question" component={QuestionPage} />
        </div>
    </Router>
  );
};

export default RouteMap;
