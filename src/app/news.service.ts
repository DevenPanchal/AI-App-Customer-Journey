import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  uri = 'http://localhost:8080';  // url of the backend
  constructor(private http: HttpClient) { }



  getAllNews() {
    return this.http.get(`${this.uri}/api/news/`);
  }
  getNewsById(id) {
    return this.http.get(`${this.uri}/api/news/${id}`);
  }

  deleteNews(id) {
    return this.http.delete(`${this.uri}/api/news/{id}`);
  }

  createNews(title, content, author, source, image) {
    // send the post content
    const news = {
      title: title,
      content: content,
      author: author,
      source: source,
      image: image
    };
    return this.http.post(`${this.uri}/api/news/`, news);
  }

}