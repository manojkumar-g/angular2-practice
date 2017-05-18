import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  name:string;
  url:string;
  votes:number;
  constructor() {
      this.name = 'Manoj'
      this.url = 'github.com/manojkumar-g'
      this.votes = 5
   }
   voteUp(){
       this.votes += 1;
   }
   voteDown(){
       this.votes -= 1;
   }

  ngOnInit() {
  }

}
