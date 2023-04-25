import { useState, useEffect } from 'react';
import { Alert } from 'antd';
import { Offline } from 'react-detect-offline';
import { debounce } from 'lodash';

import MovieList from '../movie-list/MovieList';
import MovieService from '../movie-service/movie-service';
import Spinner from '../spinner/spiner';
import AlertMovie from '../alert/alert';
import SearchInput from '../search-input/search-input';
import PaginationMovie from '../pagination/pagination';

import './App.css';

const App = () => {
  const movieService = new MovieService();

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [curPage, setSurPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [tableValue, setTableValue] = useState(true);
  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const onChangePage = (page) => {
    setSurPage(page);
  };

  const searchQuery = (trgt) => {
    setQuery(trgt);
    if (trgt) {
      setSurPage(1);
    } else {
      setSurPage(curPage);
    }
  };

  useEffect(() => {
    if (tableValue) {
      setTableValue(true);
      movieService.popularMovie(curPage).then((data) => {
        setTotal(data.total_results);
        setMovieData(data.results);
        setLoading(false);
        setError(false);
      });
    }
    if (query) {
      setTableValue(false);
      setLoading(true);
      setError(false);
      movieService
        .movieAll(query, curPage)
        .then((data) => {
          if (data.results.length) {
            setLoading(false);
            setMovieData(data.results);
            setTotal(data.total_results);
          } else {
            setMovieData([]);
            setError(true);
          }
        })
        .catch(onError);
    }
    if (query === '') {
      setTableValue(true);
    }
  }, [query, tableValue, curPage]);

  const hasData = !(loading || error);
  const errorMessage = error ? <AlertMovie /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <MovieList dataMovie={movieData} /> : null;
  return (
    <div className="App">
      <Offline>
        <Alert type="warning" message="sadness" description="problem  with internet" showIcon className="offline" />
      </Offline>
      <SearchInput searchQuery={debounce(searchQuery, 500)} />
      {errorMessage}
      {spinner}
      {content}
      <PaginationMovie query={query} total={total} curPage={curPage} onChangePage={onChangePage} />
    </div>
  );
};

export default App;
