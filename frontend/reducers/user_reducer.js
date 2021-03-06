import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: [],
});

const UserReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, nullUser, {
        user,
      });
    default:
      return state;
  }
};

export default UserReducer;
