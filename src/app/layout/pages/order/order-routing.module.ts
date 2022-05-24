import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from 'src/app/guards/access.guard';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'shipping',
    canActivate: [AccessGuard],
    loadChildren: () =>
      import('./shipping/shipping.module').then((m) => m.ShippingModule),
  },
  {
    path: 'invoice',
    canActivate: [AccessGuard],
    loadChildren: () =>
      import('./invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  {
    path: 'final',
    canActivate: [AccessGuard],
    loadChildren: () =>
      import('./final/final.module').then((m) => m.FinalModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
