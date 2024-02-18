import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FeatureRoutingModule } from "./feature.routing.module";
import { CommonModule } from "@angular/common";
import { ShoppingCartComponent } from "../presentational-components/shopping-cart/shopping-cart.component";
import { CartComponent } from "./cart/cart.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    CartComponent,
    ShoppingCartComponent
  ],
  imports: [
    FeatureRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class FeatureModule { }
