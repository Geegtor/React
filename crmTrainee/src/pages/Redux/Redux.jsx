// !!! WARNING !!!
// the code in this file was written during initial setup and shold be corrected or removed
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import {
  increaseCounter,
  decreaseCounter,
} from '../../store/actions/counterActions';

const Redux = ({ count, dispatchIncreaseCounter, dispatchDecreaseCounter }) => {
  const handleIncrease = () => {
    dispatchIncreaseCounter();
  };
  const handleDecrease = () => {
    dispatchDecreaseCounter();
  };

  return (
    <div>
      <div>
        <Button value="increase" onClick={handleIncrease} />
        <Button value="decrease" onClick={handleDecrease} />
      </div>
      <div>{count}</div>
    </div>
  );
};

Redux.propTypes = {
  count: PropTypes.number.isRequired,
  dispatchIncreaseCounter: PropTypes.func.isRequired,
  dispatchDecreaseCounter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchIncreaseCounter: () => dispatch(increaseCounter()),

  dispatchDecreaseCounter: () => dispatch(decreaseCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
