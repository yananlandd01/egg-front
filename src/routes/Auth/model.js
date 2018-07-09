import {getLogin} from '../../services/login';

export default {
  namespace: 'login',

  state: {
    loginState: false,
  },

  subscriptions: {
    setup({dispatch, history}) {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch ({payload}, {call, put}) {
      // eslint-disable-line
      yield put ({type: 'save'});
    },
    *getLogin ({payload}, {call, put}) {
      console.log (payload);
      const data = yield getLogin (payload);
      console.log (data);
    },
  },

  reducers: {
    save (state, action) {
      return {...state, ...action.payload};
    },
  },
};
