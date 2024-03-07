
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartFeatureComponent } from './cart/cart-feature.component';

const routes: Routes = [
  { path: 'cart', component: CartFeatureComponent },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartFeatureRoutingModule { }
