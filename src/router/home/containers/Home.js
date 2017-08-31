import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
  });
};

export default connect(mapStateToProps)(Home);
