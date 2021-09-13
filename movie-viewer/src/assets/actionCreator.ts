import * as actionTypes from "./actionTypes"
import { API_URL } from "./API_URL"
const axios = require('axios')

export const getMovieList = (search: string | any) => async (dispatch: DispatchType) => {
    try {
        console.log(API_URL+search);
        dispatch({
            type: actionTypes.MOVIE_LIST_LOADING,
            data: []
        })

        const res = await axios.get(
            API_URL + search
        )

        dispatch({
            type: actionTypes.MOVIE_LIST_RECEIVED,
            data: res.data
        })
    } catch (e) {
        dispatch({
            type: actionTypes.MOVIE_LIST_LOST,
            data: []
        })
    }
}