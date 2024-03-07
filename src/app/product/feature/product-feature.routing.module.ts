
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFeatureComponent } from './products/products-feature.component';
import { AddNewProductFeatureComponent } from './add-new-product/add-new-product-feature.component';
import { ProductFeatureComponent } from './product/product-feature.component';

const routes: Routes = [
  { path: 'products', component: ProductsFeatureComponent },
  { path: 'products/add-new-product',component: AddNewProductFeatureComponent },
  { path: 'products/:id', component: ProductFeatureComponent },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductFeatureRoutingModule { }
