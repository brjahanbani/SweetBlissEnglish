import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { ProgressModule } from 'src/app/layout/global/progress/progress.module';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [CommonModule, InvoiceRoutingModule, ProgressModule],
})
export class InvoiceModule {}
