import { connect } from 'react-redux';
import Display from '../../2-molecules/Display';

const mapStateToProps = state => ({
  number: state.counter.number,
  backgroundColor: `rgb(${state.ui.backgroundColor[0]}, ${state.ui.backgroundColor[1]}, ${state.ui.backgroundColor[2]})`,
});

export default connect(mapStateToProps)(Display);