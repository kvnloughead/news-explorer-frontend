/* eslint-disable consistent-return */
// const BASE_URL = 'https://api.knews.students.nomoreparties.site';
const BASE_URL = 'http://localhost:3001';

module.exports.register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Acccept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password, name }),
})
  .then((res) => res.json());

module.exports.authorize = (identifier, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Acccept: 'application/json',
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

module.exports.getContent = (token) => fetch(`${BASE_URL}/users/me`, {
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

module.exports.saveArticle = ({
  keyword, content, date, source, title, url, urlToImage,
}, token) => fetch(`${BASE_URL}/articles`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    keyword, title, text: content, date, source, link: url, image: urlToImage,
  }),
})
  .then((res) => res.json());
