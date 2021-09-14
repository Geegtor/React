import * as actionTypes from './actionTypes';
import { API_URL } from './API_URL';

const axios = require('axios');
// почему тут неожиданно обычный require? import чем-то не угодил? :)

// стоит сделать на каждый экшн по экшн-creator'у
export const getMovieList = (search: string | any) => async (dispatch: DispatchType) => {
  try {
    console.log(API_URL + search);
    // логи перед комитом желательно подчищать
    dispatch({
      type: actionTypes.MOVIE_LIST_LOADING,
      data: [],
    });

    const res = await axios.get(
      API_URL + search,
    );

    dispatch({
      type: actionTypes.MOVIE_LIST_RECEIVED,
      data: res.data,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.MOVIE_LIST_LOST,
      data: [],
    });
  }
};

