import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas comunes como ngIf, ngFor
import { HttpClientModule } from '@angular/common/http'; // Si necesitas HTTP
import { TableModule } from 'primeng/table'; // Para usar las tablas de PrimeNG
import { ButtonModule } from 'primeng/button'; // Si necesitas botones de PrimeNG
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // ReactiveFormsModule es necesario
import { LayoutService } from '../../../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { CouponCrearDTO } from '../interfaces/coupons.interface';

@Component({
  selector: 'app-add-coupon',
  standalone: true,
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css'],
  imports: [
    CommonModule, // Importa el módulo necesario
    ReactiveFormsModule, // Asegúrate de incluirlo aquí
    HttpClientModule,
    TableModule,
    ButtonModule,
  ],
})
export class AddCouponComponent {
  form: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder, private layoutService: LayoutService, private router: Router) {
    this.form = this.fb.group({
      codeDiscount: ['', Validators.required],
      description: ['', Validators.required],
      initDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      status: ['', Validators.required],
      discountPercentage: ['', [Validators.required, Validators.min(1)]],
      idCategory: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const couponData: CouponCrearDTO = this.form.value;
      this.layoutService.registerCoupon(couponData).subscribe(
        (response) => {
          this.message = response.message;
          // Optionally, reset the form or navigate to another page
          this.router.navigate(['/coupons']);
        },
        (error) => {
          this.message = 'Error registering coupon: ' + error.message;
        }
      );
    } else {
      this.message = 'Please fill all required fields.';
    }
    }
    cancel() {
      // Navega a la página principal de los cupones
      this.router.navigate(['/Coupons']);
    }
  }

