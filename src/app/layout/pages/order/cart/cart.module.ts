import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ProgressModule } from 'src/app/layout/global/progress/progress.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, ProgressModule],
})
export class CartModule {}
