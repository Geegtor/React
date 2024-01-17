import { setTime, setPendingStatus } from '../actions/getTimeActions';

const axios = require('axios');

const getTime = () => (dispatch) => {
  dispatch({ type: 'getTime started' });

  dispatch(setPendingStatus());

  axios.get('http://worldtimeapi.org/api/ip').then(({ data }) => {
    dispatch(setTime(data));

    dispatch({ type: 'getTime ended' });
  });
};

export default getTime;
