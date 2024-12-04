import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CouponDTO } from '../interfaces/coupons.interface';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { TableModule } from 'primeng/table';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-page-principal',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
  ],
  templateUrl: './coupon-page-principal.component.html',
  styleUrls: ['./coupon-page-principal.component.css'],
})
export class CouponPagePrincipalComponent implements OnInit {
  listaCoupones: CouponDTO[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private service: LayoutService, private router: Router) {}
  navigateToAdd() {
    this.router.navigate(['/Coupons/Agregar']);
  }
  redirectToAdd() {
    window.location.href = '/Coupons/Agregar';
  }
  ngOnInit(): void {
    this.loadAllCoupons(); // Por defecto, cargar todos los cupones
  }

  loadAllCoupons(): void {
    this.service.getAllCoupons().pipe(
      catchError(error => {
        this.errorMessage = 'Error al cargar los cupones';
        this.loading = false;
        return of([]); // Devuelve un array vacío en caso de error
      })
    ).subscribe(coupons => {
      this.listaCoupones = coupons;
      this.loading = false;
    });
  }

  loadActiveCoupons(): void {
    this.service.getActiveCoupons().pipe(
      catchError(error => {
        this.errorMessage = 'Error al cargar los cupones activos';
        this.loading = false;
        return of([]); // Devuelve un array vacío en caso de error
      })
    ).subscribe(coupons => {
      this.listaCoupones = coupons;
      this.loading = false;
    });
  }

  loadInactiveCoupons(): void {
    this.service.getInactiveCoupons().pipe(
      catchError(error => {
        this.errorMessage = 'Error al cargar los cupones inactivos';
        this.loading = false;
        return of([]); // Devuelve un array vacío en caso de error
      })
    ).subscribe(coupons => {
      this.listaCoupones = coupons;
      this.loading = false;
    });
  }

  onGlobalFilter(table: any, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();
    table.filter(value, 'global', 'contains'); // Usa el filtrado global de PrimeNG
  }
}
