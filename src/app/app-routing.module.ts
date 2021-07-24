import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentComponent} from './page/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
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
