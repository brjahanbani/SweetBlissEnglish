import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShippingService } from 'src/app/services/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  form = new FormGroup({
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100),
    ]),
  });

  constructor(
    private router: Router,
    private shippingService: ShippingService
  ) {}

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    // if (this.form.invalid) {
    //   this.form.markAllAsTouched();
    //   return;
    // }
    // this.shippingService.addAddress(this.form.value).subscribe(
    //   (response) => {
    //     this.router.navigate(['/invoice']);
    //   },
    //   (error) => {
    //     if (!error.status) {
    //       this.form.setErrors({ noConnection: true });
    //     } else {
    //       this.form.setErrors({ unknownError: true });
    //     }
    //   }
    // );
  }

  ngOnInit(): void {}
}
