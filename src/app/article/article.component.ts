import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import {Article} from './article.model'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl'],
})
export class ArticleComponent implements OnInit {
  @Input()
  article:Article;
  @Output()
  deleteArticle:EventEmitter<String> = new EventEmitter();
   voteUp():boolean{
       this.article.voteUp();
       return false;
   }
   voteDown():boolean{
       this.article.voteDown();
       return false;
   }
   delete(){
      console.log('trying to send delete request',this.article.name);
      this.deleteArticle.emit(this.article.name)
   }

  ngOnInit() {
  }

}
