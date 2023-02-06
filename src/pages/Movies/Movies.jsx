import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByName, imgBaseUrl } from 'services/api-movie';
import NotFound from '../../components/NotFound/NotFound';
import Loader from '../../components/Loader/Loader';
import {
  Form,
  Input,
  Button,
  MovieList,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('resolved');
  const location = useLocation();

  useEffect(() => {
    const onQuery = searchParams.get('query') ?? '';
    if (!onQuery) return;

    getMoviesByName(onQuery).then(results => {
      setStatus('pending');
      if (results.length === 0) return setStatus('rejected');

      setStatus('resolved');
      setMovies(results);
    });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Please enter something :)');
      return;
    }
    setSearchParams({ query });
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={query} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <NotFound />}
      {status === 'resolved' && movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title, name, poster_path }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={
                    poster_path
                      ? imgBaseUrl.concat(poster_path)
                      : 'https://cdn-icons-png.flaticon.com/512/6386/6386976.png'
                  }
                  alt={title ?? name}
                />
                <MovieTitle>
                  <h3>{title ?? name}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </>
  );
};
export default Movies;