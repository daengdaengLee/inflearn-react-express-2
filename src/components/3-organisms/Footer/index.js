import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../../../ducks/counter';
import * as uiActions from '../../../ducks/ui';
import Control from '../../2-molecules/Control';

const mapDispatchToProps = dispatch => ({
  onClickIncrement: bindActionCreators(counterActions.applyIncrement, dispatch),
  onClickDecrement: bindActionCreators(counterActions.applyDecrement, dispatch),
  onClickRandomizeColor: bindActionCreators(uiActions.applyChangeBackgroundColor, dispatch),
});

export default connect(null, mapDispatchToProps)(Control);