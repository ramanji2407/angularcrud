import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDilogComponent } from './product-dilog/product-dilog.component';
import { PostComponentComponent } from './post-component/post-component.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'create', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'update/:id', component: ProductComponent },
  { path: 'delete/:id', component: ProductComponent },


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
