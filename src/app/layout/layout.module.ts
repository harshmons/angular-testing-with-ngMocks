import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ],
  exports:[LayoutComponent],
  providers: [],
})
export class LayoutModule { }
