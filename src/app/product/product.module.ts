import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ProductDilogComponent } from './product-dilog/product-dilog.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { PaswordResetComponent } from './pasword-reset/pasword-reset.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDilogComponent,
    PostComponentComponent,
    SideNavComponent,
    ViewUsersComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    PaswordResetComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatSidenavModule,
    MatStepperModule,
    FormsModule,
    MatCardModule
  ]
})
export class ProductModule { }
