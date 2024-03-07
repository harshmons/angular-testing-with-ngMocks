import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CartFeatureRoutingModule } from "./cart-feature.routing.module";
import { CommonModule } from "@angular/common";
import { ShoppingCartComponent } from "../components/shopping-cart/shopping-cart.component";
import { CartFeatureComponent } from "./cart/cart-feature.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    CartFeatureComponent,
    ShoppingCartComponent
  ],
  imports: [
    CartFeatureRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class CartFeatureModule { }
