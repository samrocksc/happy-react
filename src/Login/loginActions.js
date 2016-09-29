import rest from 'rest';
import { browserHistory } from 'react-router';

import * as types from '../constants';

const errorCodeInterceptor = require('rest/interceptor/errorCode');
const mimeInterceptor = require('rest/interceptor/mime');

export const updateUsername = payload => ({ type: types.UPDATE_USERNAME, payload });

export const updatePassword = payload => ({ type: types.UPDATE_PASSWORD, payload });

export const beginAuth = () => ({ type: types.BEGIN_AUTH });

export const endAuth = () => ({ type: types.END_AUTH });

export const beginLogin = (email, password) => {
  const restCall = rest.wrap(errorCodeInterceptor).wrap(mimeInterceptor, { mime: 'application/json' });
  restCall({
    method: 'POST',
    path: '/api/auth',
    entity: {
      email,
      password,
    },
  })
    .then((response) => {
      if (response.status.code === 200) {
        browserHistory.push('/home');
      }
    })
    .catch((err) => {
      if (err.status.code === 401) {
        return err;
      }
      return err;
    });
};
