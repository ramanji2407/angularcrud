import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDilogComponent } from './product-dilog/product-dilog.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { ProductViewComponent } from '../product-view/product-view.component';

const routes: Routes = [
  // { path: '', component: ProductComponent },
  // { path: 'create', component: ProductDilogComponent },
  // { path: 'product/:id', component: ProductComponent },
  // // { path: 'update/:id', component: ProductDilogComponent },
  { path: 'delete/:id', component: ProductComponent },

  {
    path: 'dashboard',
    component: ProductComponent,
    children: [
      { path: 'create', component: ProductDilogComponent },
      { path: 'update/:id', component: ProductDilogComponent },
      { path: 'product/:id', component: ProductViewComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
