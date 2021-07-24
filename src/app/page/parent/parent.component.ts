import {Component} from '@angular/core';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  keys: any = [
    {
      label: 'C',
      value: 'c'
    },
    {
      label: '()',
      value: 'c'
    },
    {
      label: '%',
      value: 'c'
    },
    {
      label: '/',
      value: 'c'
    },
    {
      label: '7',
      value: '7'
    },
    {
      label: '8',
      value: '8'
    },
    {
      label: '9',
      value: '9'
    },
    {
      label: 'X',
      value: 'x'
    },
    {
      label: '4',
      value: '4'
    },
    {
      label: '5',
      value: '5'
    },
    {
      label: '6',
      value: '6'
    },
    {
      label: '-',
      value: 'stay'
    },
    {
      label: '1',
      value: '1'
    },
    {
      label: '2',
      value: '2'
    },
    {
      label: '3',
      value: '3'
    },
    {
      label: '+',
      value: 'sum'
    },
    {
      label: '+/-',
      value: 'staySum'
    },
    {
      label: '0',
      value: '0'
    },
    {
      label: '.',
      value: 'point'
    },
    {
      label: '=',
      value: 'equal'
    },
  ];
  response: number;
}
