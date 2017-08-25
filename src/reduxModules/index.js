import { combineReducers } from 'redux';
import LoanReducer from './Loan';
import TransactionReducer from './Transaction';

export default combineReducers({
  loans: LoanReducer,
  transactions: TransactionReducer,
});
