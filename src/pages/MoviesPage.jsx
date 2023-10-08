import React, { useRef } from 'react';
import { useEffect, useState, useCallback } from 'react';

import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import { serchMoviesByQuery } from 'api/serchMoviesByQuery';
import { useSearchParams } from 'react-router-dom';
import { Movies } from 'components/Parts.styled';

const MoviesPage = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [findedMovies, setFindedMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  //for first search
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');
  const ref = useRef(query);

  const submit = value => {
    setSearchQuery(value);
  };

  const fetchByQuery = useCallback(async (dataForSearch) => {
    try {
      setIsLoading(true);
      setFindedMovies(null);
      const data = await serchMoviesByQuery(dataForSearch);
      setFindedMovies(data.results);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  //
  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery);
  }, [fetchByQuery, searchQuery]);

  	useEffect(() => {
      ref.current && fetchByQuery(ref.current);
    }, [fetchByQuery]);

  return (
    <Movies>
      <SearchForm submit={submit}></SearchForm>
      {isLoading && 'Loading...'}
      {error && error.message}
      {findedMovies && (!findedMovies.length ? (
					<h1>No data found</h1>
				) : <MoviesList data={findedMovies} />)}
    </Movies>
  );
};

export default MoviesPage;
