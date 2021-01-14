/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import { BASE_URL } from './constants';

class MainApi {
  register(email, password, name) {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => res.json());
  }

  authorize(identifier, password) {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: identifier, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) {
          localStorage.setItem('token', data.token);
        }
        return data;
      });
  }

  getContent(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => (res.ok
      ? res.json()
      : Promise.reject(new Error(`${res.status} - ${res.message}`))))
      .then((data) => data);
  }

  getArticles(token) {
    return fetch(`${BASE_URL}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json());
  }

  saveArticle({
    keyword, description, publishedAt, source, title, url, urlToImage,
  }, token) {
    return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword, title, description, publishedAt, source, url, urlToImage,
      }),
    })
      .then((res) => res.json());
  }

  deleteArticle(cardId, token) {
    return fetch(`${BASE_URL}/articles/${cardId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const mainApi = new MainApi();
export default mainApi;
