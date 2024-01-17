// !!! WARNING !!!
// the code in this file was written during initial setup and shold be corrected or removed

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import {
  increaseCounter,
  decreaseCounter,
} from '../../store/actions/counterActions';
import getTime from '../../store/thunk/getTime';
import { setTimeStatus } from '../../utils/constants';

const Thunk = ({
  dispatchGetTime, time, status,
}) => {
  const handleOnClick = () => {
    dispatchGetTime();
  };

  return (
    <div>
      <Button value="Get Current Time" onClick={handleOnClick} />
      {status === setTimeStatus.pending && <p>Making request...</p>}
      {time && (
      <table>
        {Object.keys(time).map((key) => (
          <tr>
            <td>{key}</td>
            <td>{`${time[key]}`}</td>
          </tr>
        ))}
      </table>
      )}
    </div>
  );
};

Thunk.propTypes = {
  dispatchGetTime: PropTypes.func.isRequired,
  time: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  time: state.time.data,
  status: state.time.status,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchIncreaseCounter: () => dispatch(increaseCounter()),

  dispatchDecreaseCounter: () => dispatch(decreaseCounter()),

  dispatchGetTime: () => dispatch(getTime()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Thunk);
