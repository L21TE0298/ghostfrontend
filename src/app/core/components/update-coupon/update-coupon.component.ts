import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { CouponDTO } from '../interfaces/coupons.interface';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {
  coupon: CouponDTO = {
    codeDiscount: '',
    description: '',
    discountPercentage: 0,
    idCoupon: 0,
    initDate: new Date(),
    expirationDate: new Date(),
    status: false,
    idCategory: 0,
  };
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LayoutService
  ) {}

  ngOnInit(): void {
    // Obtener el idCoupon desde la URL
    const idCoupon = +this.route.snapshot.paramMap.get('idCoupon')!;

    // Llamar al servicio para obtener el cupón
    this.service.getCouponById(idCoupon).subscribe({
      next: (coupon) => {
        this.coupon = coupon;
      },
      error: () => {
        this.errorMessage = 'Error al cargar el cupón';
      }
    });
  }

  // Método para actualizar el cupón
  updateCoupon(): void {
    this.service.updateCoupon(this.coupon).subscribe({
      next: () => {
        // Redirige o muestra un mensaje de éxito
        alert('Coupon updated successfully!');
        this.router.navigate(['/Coupons']);
      },
      error: () => {
        this.errorMessage = 'Error al actualizar el cupón';
      }
    });
  }

  // Método para cancelar la operación y volver a la página principal
  cancel(): void {
    this.router.navigate(['/Coupons']);
  }
}
