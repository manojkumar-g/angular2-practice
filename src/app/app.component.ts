import { Component } from '@angular/core';
import {Article} from './article/article.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  articles : Article[];
  genres:string[];
  model: Article;
  constructor(){
      this.model = new Article('Title','http://');
      this.genres = ['Music','Tech','Art'];
      this.articles = [
          new Article('Manoj','github.com/manojkumar-g',5)
      ]
  }
  addArticle():boolean{
      this.articles.push(new Article(this.model.name,this.model.url));
      return false;
  }
  delete(name:string):void{
    console.log('got request',name);
    this. articles = this.articles.filter(article => article.name !== name);
  }
}
