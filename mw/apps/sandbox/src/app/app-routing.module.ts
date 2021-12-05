import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'libs/ui/src/lib/login/login.component';
import { ListingComponent } from 'libs/ui/src/lib/listing/listing.component';
import { AuthGuard } from '@mw/shared';
import { DashboardComponent } from '@mw/ui';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'login', component: LoginComponent },
  { 
    path: 'listing', 
    component: ListingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'expenses',
    canActivate: [AuthGuard],
    loadChildren: () => import('@mw/feature/expenses').then(m => m.FeatureExpensesModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }
