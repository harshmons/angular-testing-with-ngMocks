import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../presentational-components/product-card/product-card.component";
import { ProductDetailComponent } from "../presentational-components/product-detail/product-detail.component";
import { FeatureRoutingModule } from "./feature.routing.module";
import { NewProductComponent } from "../presentational-components/new-product/new-product.component";
import { ProductsComponent } from "./products/products.component";
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailComponent,
    NewProductComponent,
    ProductsComponent,
    AddNewProductComponent,
    ProductComponent
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
