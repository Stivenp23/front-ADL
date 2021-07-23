import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba Front';
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
  constructor() {
  }
}
