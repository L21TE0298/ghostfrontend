import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { NutrientDTO } from '../interfaces/nutrients.interface';

@Component({
  selector: 'app-page-principal-nutrient',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    TableModule,],
  templateUrl: './page-principal-nutrient.component.html',
  styleUrl: './page-principal-nutrient.component.css'
})
export class PagePrincipalNutrientComponent implements OnInit {
  listaNutrients: NutrientDTO[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(private service: LayoutService, private router: Router) { }
  navigateToAdd() {
    this.router.navigate(['/Nutrients/Agregar']);
  }
  redirectToAdd() {
    window.location.href = '/Nutrients/Agregar';
  }
  navigateToUpdate(idNutrient: string) {
    this.router.navigate(['/Nutrients/Actualizar', idNutrient]);
  }
  ngOnInit(): void {
    this.loadAllNutrients();
  }
  loadAllNutrients(): void {
    this.service.getAllNutrients().pipe(
      catchError(error => {
        this.errorMessage = 'Error al cargar los cupones';
        this.loading = false;
        return of([]); // Devuelve un array vacío en caso de error
      })
    ).subscribe(nutrients => {
      this.listaNutrients = nutrients;
      this.loading = false;
    });
  }
}
