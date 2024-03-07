import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { shoppingCartReducer } from './cart/store';
import { CartFeatureModule } from './cart/feature/cart-feature.module';
import { ProductFeatureModule } from './product/feature/product-feature.module';
import { productsReducer,ProductsEffects } from './product/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ProductFeatureModule,
    CartFeatureModule,
    LayoutModule,
    StoreModule.forRoot({products:productsReducer,cart:shoppingCartReducer}),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
