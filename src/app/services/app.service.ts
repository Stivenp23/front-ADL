import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  res$: Observable<any> = this.store.select('calculator', 'res')
  operation$: Observable<any> = this.store.select('calculator', 'operation')

  constructor(private store: Store<any>) {
  }
}
