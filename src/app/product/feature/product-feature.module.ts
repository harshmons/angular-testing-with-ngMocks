import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ProductCardComponent,ProductDetailComponent,NewProductComponent } from "../components";
import { ProductFeatureRoutingModule } from "./product-feature.routing.module";
import { ProductsFeatureComponent } from "./products/products-feature.component";
import { AddNewProductFeatureComponent } from './add-new-product/add-new-product-feature.component';
import { ProductFeatureComponent } from './product/product-feature.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailComponent,
    NewProductComponent,
    ProductsFeatureComponent,
    AddNewProductFeatureComponent,
    ProductFeatureComponent,
  ],
  imports: [
    ProductFeatureRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductFeatureModule { }
