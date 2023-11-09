import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  // {
  //   path:'create',
  //   component:DialogComponent
  // },
  { path: '', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'login-signup', loadChildren: () => import('./login-signup/login-signup.module').then(m => m.LoginSignupModule) },
  {path:'**',component:NotfoundComponent}
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
