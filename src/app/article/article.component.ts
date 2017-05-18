import { Component, OnInit ,Input} from '@angular/core';
import {Article} from './article.model'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  @Input()
  article:Article;
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
