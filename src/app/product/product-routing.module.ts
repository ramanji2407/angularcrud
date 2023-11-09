import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDilogComponent } from './components/product-dialog/product-dilog.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserComponent } from './user/user.component';
import { authGuard } from '../auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { PaswordResetComponent } from './pasword-reset/pasword-reset.component';

const routes: Routes = [
  // { path: '', component: ProductComponent },
  // { path: 'create', component: ProductDilogComponent },
  // { path: 'product/:id', component: ProductComponent },
  // // { path: 'update/:id', component: ProductDilogComponent },

 // { path: 'delete/:id', component: ProductComponent },

  {
    path: 'dashboard',
    component: SideNavComponent,
    canActivate:[authGuard],
    
    children: [
      {
        path: 'list',
        component: ProductComponent,
        children: [
          { path: 'create', component: ProductDilogComponent },
          { path: 'update/:id', component: ProductDilogComponent },
          { path: 'product/:id', component: ProductViewComponent },
        ],
      },
      {
        path: 'users',
        component: ViewUsersComponent,
        children: [
          { path: 'create', component: PostComponentComponent },
          { path: 'update/:id', component: PostComponentComponent },
        ],
      },

      { path: 'user/:id', component: UserComponent },
    ],
  },
  {
    path: '',
    // redirectTo: 'dashboard',
    // pathMatch: 'full',
    component:DashboardComponent
  },
  {
    path: 'login',
    // redirectTo: 'dashboard',
    // pathMatch: 'full',
    component:LoginComponent
  },

  {
    path: 'signup',
    // redirectTo: 'dashboard',
    // pathMatch: 'full',
    component:SignupComponent
  },
 
  {
    path: 'reset-password',
    // redirectTo: 'dashboard',
    // pathMatch: 'full',
    component:PaswordResetComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
