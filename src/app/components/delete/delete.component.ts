import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { News } from 'src/app/news.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: String;
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.deleteNews(this.id).subscribe(() => {
      console.log("The item was deleted");
    });
  }
}



