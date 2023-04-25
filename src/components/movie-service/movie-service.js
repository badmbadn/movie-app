import { Component } from 'react';

export default class MovieService extends Component {
  _key = '6172d636cf75f4c8b2c88807be699419';
  _image = 'https://image.tmdb.org/t/p/w500';
  _defaultPoster = 'https://via.placeholder.com/200x150';
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(res.status, 'Ошибка в запросе!');
    }
    return await res.json();
  };

  movieAll = async (query, page = 1) => {
    const res = await this.getResource(
      `https://api.themoviedb.org/3/search/movie?api_key=${this._key}&language=en-US&query=${query}&page=${page}`
    );
    const result = await res;
    return result;
  };

  popularMovie = async (page = 1) => {
    const res = await this.getResource(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this._key}&language=en-US&page=${page}`
    );
    const result = await res;
    return result;
  };

  defaultPoster = (poster) => {
    return poster ? this._image + poster : (poster = this._defaultPoster);
  };
}
