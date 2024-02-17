import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FeatureRoutingModule } from "./feature.routing.module";
import { CommonModule } from "@angular/common";
import { ShoppingCartComponent } from "../presentational-components/shopping-cart/shopping-cart.component";
import { CartComponent } from "./cart/cart.component";

@NgModule({
  declarations: [
    CartComponent,
    ShoppingCartComponent
  ],
  imports: [
    FeatureRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class FeatureModule { }
