import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryCardModule } from 'src/app/layout/global/category-card/category-card.module';
import { BreadcrumbModule } from 'src/app/layout/global/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CategoryCardModule,
    BreadcrumbModule,
  ],
})
export class CategoriesModule {}
