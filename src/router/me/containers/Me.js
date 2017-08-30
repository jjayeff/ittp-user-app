import { connect } from 'react-redux';
import Me from '../components/Me';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
    address: state.address,
  });
};

export default connect(mapStateToProps)(Me);
