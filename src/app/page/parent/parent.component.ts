import { Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppActions} from '../../actions';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  keys: any = [
    {
      label: 'C',
      value: 'c',
      type: 'clean'
    },
    {
      label: '()',
      value: '()',
      type: 'parenthesis'
    },
    {
      label: '%',
      value: '%',
      type: 'percentage'
    },
    {
      label: '/',
      value: '/',
      type: 'd'
    },
    {
      label: '7',
      value: '7',
      type: 'number'
    },
    {
      label: '8',
      value: '8',
      type: 'number'
    },
    {
      label: '9',
      value: '9',
      type: 'number'
    },
    {
      label: 'x',
      value: 'x',
      type: 'm'
    },
    {
      label: '4',
      value: '4',
      type: 'number'
    },
    {
      label: '5',
      value: '5',
      type: 'number'
    },
    {
      label: '6',
      value: '6',
      type: 'number'
    },
    {
      label: '-',
      value: '-',
      type: 'r'
    },
    {
      label: '1',
      value: '1',
      type: 'number'
    },
    {
      label: '2',
      value: '2',
      type: 'number'
    },
    {
      label: '3',
      value: '3',
      type: 'number'
    },
    {
      label: '+',
      value: '+',
      type: 's'
    },
    {
      label: '+/-',
      value: '+/-',
      type: 'addN'
    },
    {
      label: '0',
      value: '0',
      type: 'number'
    },
    {
      label: '.',
      value: '.',
      type: 'p'
    },
    {
      label: '=',
      value: '=',
      type: 'equal'
    },
  ];
  response = '0';
  firstValue: number | null = null;
  action: string | null = '';
  flag = false

  constructor(private store: Store<any>) {
  }

  eventCal(key) {
    if (this.flag) {
      this.clean();
      this.flag = !this.flag;
    }
    switch (key?.type) {
      case 'clean':
        this.clean()
        break;
      case 'number':
        this.concat(key)
        break;
      case 's' :
        this.setOperation(key);
        break;
      case 'r' :
        this.setOperation(key);
        break;
      case 'd' :
        this.setOperation(key);
        break;
      case 'm' :
        this.setOperation(key);
        break;
      case 'p' :
        this.concat(key)
        break;
      case 'equal':
        const a = this.firstValue;
        const b = parseFloat(this.response);
        let result;
        if (this.action === 'm') {
          result = a * b;
        } else if (this.action === 'd') {
          result = a / b;
        } else if (this.action === 's') {
          result = a + b;
        } else if (this.action === 'r') {
          result = a - b;
        }
        this.firstValue = result;
        this.response = result.toString();
        this.store.dispatch(AppActions.getOperation(key?.value));
        this.flag = !this.flag;
        break;
      default:
        break;
    }
    this.store.dispatch(AppActions.setRes(this.response));
  }

  concat(key) {
    if (this.response === '0') {
      this.response = key.value.toString();
    } else {
      this.response = `${this.response}${key?.value}`;
    }
  }

  clean() {
    this.response = '0';
    this.store.dispatch(AppActions.getOperation(''));
  }

  setOperation(data) {
    this.store.dispatch(AppActions.getOperation(data?.value));
    this.firstValue = parseFloat(this.response);
    this.action = data?.type;
    this.response = '';
  }

}
