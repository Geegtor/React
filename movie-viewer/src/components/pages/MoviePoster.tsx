import * as React from "react"
import "./MoviePoster.css"

type Props = {
    movie: any
}

export const MoviePoster: React.FC<Props> = ({ movie }) => {
    return (
        <div className='card'>
            <h3><b>{movie.Title}</b></h3>
            <div className='img-part'>
                <img alt="MOVIE_POSTER" src={movie.Poster} />
            </div>
            <div className='text-part'>
                <p>{movie.Year}</p>
            </div>
            <hr></hr>
        </div>
    )
}