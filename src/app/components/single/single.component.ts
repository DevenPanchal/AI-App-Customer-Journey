import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { News } from 'src/app/news.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  specificnews: News;
  id: String;
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.
      getNewsById(this.id)
      .subscribe((data: News) => {
        this.specificnews = data;
        console.log('Single news received by list component ... ');
        console.log(this.specificnews);
      });
  }

}
