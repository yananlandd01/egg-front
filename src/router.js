import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic';

const createRoutes = (config, index) => <Route key={index} {...config} />;

// filter routes array
const createRouteArr = (config, app) => {
  let routeArr = [];
  config.map (item => {
    let UserPageComponent = dynamic ({
      app,
      models: () => [item.model],
      component: () => item.component,
    });
    let routeItem = {
      path: item.path,
      component: UserPageComponent,
      exact: true,
    };
    routeArr.push (routeItem);
  });
  return routeArr;
};

const getRouteDefault = (routerFiles, app) => {
  let routeConfigArr = [];
  routerFiles.keys ().map (item => {
    let configs = routerFiles (item).default;
    if (configs) {
      routeConfigArr = routeConfigArr.concat (configs);
    }
  });
  return createRouteArr (routeConfigArr, app);
};

const routes = app => {
  // get all route.js from './routes'
  const routerFiles = require.context ('./routes', true, /route\.js$/);

  // list is object of webpackContext so we should get the keys from that.
  // and then get defaut value of every item of the list
  return getRouteDefault (routerFiles, app);
};
function RouterConfig({history, app}) {
  const Approutes = routes (app);
  return (
    <Router history={history}>
      <Switch>
        {Approutes.map ((item, index) => createRoutes (item, index))}
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
