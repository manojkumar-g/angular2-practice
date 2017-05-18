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
  addArticle(title:HTMLInputElement,url:HTMLInputElement):boolean{
      this.articles.push(new Article(title.value,url.value));
      title.value = ''
      url.value = ''
      return false;
  }
}
