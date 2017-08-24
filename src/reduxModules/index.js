import { combineReducers } from 'redux';
import LoanReducer from './LoanReducer';

export default combineReducers({
  loans: LoanReducer,
});
