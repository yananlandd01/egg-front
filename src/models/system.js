export default {
  namespace: 'system',

  state: {
    currentRoute: [],
    currentPath: '',
    routeConfig: [],
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen (({pathname}) => {
        dispatch ({
          type: 'save',
          payload: {
            currentPath: pathname,
          },
        });
        dispatch ({
          type: 'injectionRoutes',
        });
      });
    },
  },

  effects: {
    *fetch ({payload}, {call, put}) {
      // eslint-disable-line
      yield put ({type: 'save'});
    },
  },

  reducers: {
    save (state, action) {
      return {...state, ...action.payload};
    },
    injectionRoutes (state, action) {
      const {currentPath} = state;
      const routeConfig = action.payload ? action.payload : state.routeConfig;
      const currentRoute = routeConfig.filter (
        item => item.path === currentPath
      );
      return {...state, currentRoute, routeConfig: routeConfig};
    },
  },
};
