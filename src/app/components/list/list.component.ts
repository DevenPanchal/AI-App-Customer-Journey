import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { News } from 'src/app/news.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  news: News[];
  
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService
      .getAllNews()
      .subscribe((data: News[]) => {
        this.news = data;
        console.log('All news received by list component ... ');
        console.log(this.news);
      });
  }

}
