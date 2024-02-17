import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PhonePipe } from './pipes/phone.pipe';
import { FeatureModule as ProductFeature } from './product/feature/feature.module';
import { FeatureModule as CartFeature } from './cart/feature/feature.module';
import { LayoutModule } from './layout/layout.module';
@NgModule({
  declarations: [
    AppComponent,
    PhonePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ProductFeature,
    CartFeature,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
