import { connect } from 'react-redux';
import Loan from '../components/Loan';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
  });
};

export default connect(mapStateToProps)(Loan);
