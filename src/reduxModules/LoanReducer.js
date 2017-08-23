import { Actions } from 'react-native-router-flux';

export const EMAIL_CHANGED = 'email_change';
export const PASSWORD_CHANGED = 'password_change';

export const emailChanged = (data) => {
  return {
    type: EMAIL_CHANGED,
    payload: data
  };
};
export const passwordChanged = (data) => {
  return {
    type: PASSWORD_CHANGED,
    payload: data
  };
};

const INITIAL_STATE = { 
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};
