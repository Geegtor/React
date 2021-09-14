import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieList } from '../../assets/actionCreator';
import './MovieList.css';
import { MoviePoster } from './MoviePoster';

type Props = {
    params: string[]
}

export const MovieList: React.FC<Props> = ({ params }) => {
  const [q, setQ] = React.useState<IMovie | {}>('s=war');

  const handleChange = (e: React.FormEvent) => {
    setQ({
      [e.currentTarget.id]: (e.currentTarget as HTMLInputElement).value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const dispatch: React.Dispatch<any> = useDispatch();
  const movieList: any = useSelector((state: MovieState) => state.movies);
  // а почему тут any, разве нельзя типизировать movie?

  const FetchData = () => {
    // называть стоит с маленькой буквы
    dispatch(getMovieList(q));
  };

  function spreadFilmDates() {
    const firstFilmDate: number = 1900;
    const currentYear: number = 2021;
    const filmDate: number[] = [];

    let i = firstFilmDate;
    while (i <= currentYear) {
      filmDate.push(i++);
    }

    return filmDate;
  }

  React.useEffect(() => {
    FetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        placeholder="Titile search"
        onChange={handleChange}
      />

      <select
        id="year"
        onChange={handleChange}
      >
        <option>Year</option>
        {spreadFilmDates().map((e: number) => (
          <option key={e}>{e}</option>
        ))}
      </select>

      <button onClick={handleSubmit}>
        Search
      </button>
      <hr />
      {movieList.map((e: any) => (
        <MoviePoster key={e.imdbID} movie={e} />
      ))}
    </form>
  );
};
