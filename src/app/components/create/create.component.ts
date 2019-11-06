import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { News } from 'src/app/news.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title: String;
  content: String;
  author: String;
  source: String;
  image: String;
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.createNews(this.title, this.content, this.author, this.source, this.image).subscribe(() => {
      console.log("The item was created");
    });
  }
}
