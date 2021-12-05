import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './containers/expenses/expenses.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon'; 

const expenseRoutes: Routes = [
  {
    path: '',
    component: ExpensesComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(expenseRoutes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ExpensesComponent
  ]
})
export class FeatureExpensesModule {}
