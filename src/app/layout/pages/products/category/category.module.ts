import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ProductCardModule } from 'src/app/layout/global/product-card/product-card.module';
import { BreadcrumbModule } from 'src/app/layout/global/breadcrumb/breadcrumb.module';
import { PaginationModule } from 'src/app/layout/global/pagination/pagination.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ProductCardModule,
    BreadcrumbModule,
    PaginationModule,
  ],
})
export class CategoryModule {}
