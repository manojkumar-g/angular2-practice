import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  addArticle(title:HTMLInputElement,url:HTMLInputElement):boolean{
      console.log(title.value,url.value)
      return false;
  }
}
