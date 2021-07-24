import {
  Component,
} from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  constructor(public appService: AppService) {
  }
}
