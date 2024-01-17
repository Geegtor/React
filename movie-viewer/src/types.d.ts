interface IMovie { // SHAPE OF THE MOVIE REPRESENT
    id: number
    date: string[]
}

type MovieState = {
    errorMsg: string,
    loading: boolean,
    movies: any,
    q: string
}

type MovieAction = {
    type: string
    data: string[]
}

type DispatchType = (args: MovieAction) => MovieAction
