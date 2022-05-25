import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  shippingAddress!: string;
  constructor(private storage: StorageService) {
    this.shippingAddress =
      this.storage.getItem<string>('shippingAddress') || '';
  }

  setAddress(shippingAddress: string): void {
    this.shippingAddress = shippingAddress;
    this.storage.setItem<string>('shippingAddress', shippingAddress);
  }
}
