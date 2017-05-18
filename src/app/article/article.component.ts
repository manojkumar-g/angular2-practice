import { Component, OnInit } from '@angular/core';
import {Article} from './article.model'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  article:Article;

  constructor() {
      this.article = new Article('Manoj','github.com/manojkumar-g')
   }
   voteUp():boolean{
       this.article.voteUp();
       return false;
   }
   voteDown():boolean{
       this.article.voteDown();
       return false;
   }

  ngOnInit() {
  }

}
