import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { ListComponent } from './listing/components/list/list.component';
import {MatGridListModule} from '@angular/material/grid-list'; 

@NgModule({
  imports: [
    CommonModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, MatGridListModule,
    MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule, RouterModule],
  declarations: [
    NavigationComponent,
    LoginComponent,
    ListingComponent,
    ListComponent
  ],
  exports: [
    NavigationComponent,
    LoginComponent
  ]
})
export class UiModule {}
