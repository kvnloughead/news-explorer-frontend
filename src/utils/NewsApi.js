/* eslint-disable consistent-return */
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
  // baseUrl: 'https://nomoreparties.co/news',
  newsApiUrl: 'http://newsapi.org',
  practicumUrl: 'https://nomoreparties.co/news',
  apiKey: 'ee3e693144704e9c8d98437bdd341b2b',
  today: new Date(),
  lastWeek: new Date(Date.now() - 7 * 24 * 3600 * 1000),
});

export default newsApi;
