import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shipping } from 'src/class/shipping.class';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  // private _shippingAddress$ = new BehaviorSubject<Shipping>();
  constructor(private storage: StorageService) {
    // const shippingAddressParsed =
    //   this.storage.getItem<Shipping>('shippingAddress') || [];
    // const shippingAddressClasses = shippingAddressParsed.map(
    //   (parsed) => new Shipping(parsed)
    // );
    // this._shippingAddress$.next(shippingAddressClasses);
  }

  // get shippingAddress$(): Observable<Shipping> {
  //   return this._shippingAddress$.asObservable();
  // }

  // addAddress(address: string): void {
  //   const input = this._shippingAddress$.value.map(
  //     (shippingAddress) => shippingAddress.id
  //   );

  //   if (index !== -1) {
  //     this._shippingAddress$.value[index].address =
  //       address + this._shippingAddress$.value[index].address;
  //   } else {
  //     const shippingAddress = new Shipping({ id, address });
  //     this._shippingAddress$.value.push(shippingAddress);
  //   }

  //   this.storage.setItem<Shipping[]>(
  //     'shippingAddress',
  //     this._shippingAddress$.value
  //   );
  // }
}
