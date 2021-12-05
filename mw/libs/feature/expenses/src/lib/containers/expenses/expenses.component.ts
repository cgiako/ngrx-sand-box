import { Component, OnInit } from '@angular/core';
import { Expense } from '@mw/shared';

@Component({
  selector: 'mw-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[] = [{
    description: 'Test',
    amount: 20,
    date: new Date('05/12/2021'),
    payee: 'mw'  
  },
  {
    description: 'Test',
    amount: 20,
    date: new Date('05/12/2021'),
    payee: 'mw'  
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(): void {

  }

}
