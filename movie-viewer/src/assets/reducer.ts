import * as actionTypes from "./actionTypes"

const initialState: MovieState = {
    errorMsg: "Initial Stated declared only.",
    loading: false,
    movies: [],
    q: 's=war'
}


function readHelper(obj: any) {
    let res;
    Object.values(obj).map((el: any) => { if (Array.isArray(el)) res = el });
    return res;
}

const reducer = (
    state = initialState,
    action: MovieAction
): MovieState => {
    switch (action.type) {
        case actionTypes.MOVIE_LIST_LOADING:
            return {
                ...state,
                loading: true
            };
        case actionTypes.MOVIE_LIST_RECEIVED:
            return {
                ...state,
                loading: false,
                errorMsg: "",
                movies: readHelper(action.data)
            }
        default:
            return state;
  }
}

export default reducer;