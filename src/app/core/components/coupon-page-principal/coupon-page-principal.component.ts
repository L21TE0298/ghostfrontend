import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CouponDTO } from '../interfaces/coupons.interface';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { TableModule } from 'primeng/table';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-coupon-page-principal',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule
  ],
  templateUrl: './coupon-page-principal.component.html',
  styleUrls: ['./coupon-page-principal.component.css']
})
export class CouponPagePrincipalComponent implements OnInit {
  listaCoupones: CouponDTO[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private service: LayoutService) {}

  ngOnInit(): void {
    this.loadCoupons();
  }

  loadCoupons(): void {
    this.service.getCoupons().pipe(
      catchError(error => {
        this.errorMessage = 'Error al cargar los cupones';
        this.loading = false;
        return of([]); // Devuelve un array vacío en caso de error
      })
    ).subscribe(coupons => {
      this.listaCoupones = coupons;
      this.loading = false; // Fin de la carga
    });
  }

  // Define el método onGlobalFilter para aplicar el filtrado
  onGlobalFilter(table: any, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();

    table.filter(value, 'global', 'contains'); // Usa el filtrado global de PrimeNG
  }
}
