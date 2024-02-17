
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/add-new-product',component: AddNewProductComponent },
  { path: 'products/:id', component: ProductComponent },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
