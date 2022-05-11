import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { ProgressComponent } from './global/progress/progress.component';
import { ProductCardComponent } from './global/product-card/product-card.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ProgressComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
