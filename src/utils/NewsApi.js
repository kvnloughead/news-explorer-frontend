/* eslint-disable consistent-return */
import { API_KEY, NEWS_API_URL, PROXY_URL, SEARCH_RANGE_MS } from './constants';

class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.apiKey = options.apiKey;
    this.today = options.today;
    this.lastWeek = options.lastWeek;
    this.newsApiUrl = options.newsApiUrl;
    this.practicumUrl = options.practicumUrl;
  }

  getArticles(keyword) {
    return fetch(
      `${this.practicumUrl}/v2/everything?q=${keyword}`
        + `&from=${this.lastWeek.toISOString()}`
        + `&to=${this.today.toISOString()}`
        + `&sortBy=popularity&pageSize=100&apiKey=${this.apiKey}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => data.articles);
  }
}

const newsApi = new NewsApi({
  newsApiUrl: NEWS_API_URL,
  apiKey: API_KEY,
  today: new Date(),
  lastWeek: new Date(Date.now() - SEARCH_RANGE_MS),
  practicumUrl: PROXY_URL,
});

export default newsApi;
