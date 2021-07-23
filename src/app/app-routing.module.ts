import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChildComponent} from './components/child/child.component';

const routes: Routes = [
  {
    path: '',
    component: ChildComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
