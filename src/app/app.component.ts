import { Component } from '@angular/core';
import {Article} from './article/article.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  articles : Article[];
  constructor(){
      this.articles = [
          new Article('Manoj','github.com/manojkumar-g',5)
      ]
  }
  addArticle(title:string,url:string):boolean{
      this.articles.push(new Article(title,url));
      return false;
  }
}
