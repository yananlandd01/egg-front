import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import {connect} from 'dva';
import dynamic from 'dva/dynamic';
import AllOverLayout from './components/index';
import Login from './routes/Auth/login';

const createRoutes = (config, index) => <Route key={index} {...config} />;

// filter routes array
const createRouteArr = (config, app) => {
  console.log ();
  let routeArr = [];
  app._store.dispatch ({
    type: 'system/injectionRoutes',
    payload: config,
  });
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
        <Route path="/login" component={Login} />
        <AllOverLayout>
          <Switch>
            {Approutes.map ((item, index) => createRoutes (item, index))}
          </Switch>
        </AllOverLayout>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
