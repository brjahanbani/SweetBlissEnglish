import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRoutingModule } from './final-routing.module';
import { FinalComponent } from './final.component';
import { ProgressModule } from 'src/app/layout/global/progress/progress.module';

@NgModule({
  declarations: [FinalComponent],
  imports: [CommonModule, FinalRoutingModule, ProgressModule],
})
export class FinalModule {}
