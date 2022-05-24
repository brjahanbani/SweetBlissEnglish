import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';
import { ProgressModule } from 'src/app/layout/global/progress/progress.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShippingComponent],
  imports: [CommonModule, ShippingRoutingModule, ProgressModule, SharedModule],
})
export class ShippingModule {}
