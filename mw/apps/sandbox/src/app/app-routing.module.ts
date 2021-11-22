import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'libs/ui/src/lib/login/login.component';
import { ListingComponent } from 'libs/ui/src/lib/listing/listing.component';
import { AuthGuard } from '@mw/shared';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { 
    path: 'listing', 
    component: ListingComponent,
    canActivate: [AuthGuard]
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
