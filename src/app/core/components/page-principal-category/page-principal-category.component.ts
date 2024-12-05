import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CategoryDTO } from '../interfaces/categories,interface';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-page-principal-category',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    TableModule],
  templateUrl: './page-principal-category.component.html',
  styleUrl: './page-principal-category.component.css'
})
export class PagePrincipalCategoryComponent implements OnInit {
  listaCategories: CategoryDTO[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(private service: LayoutService, private router: Router) { }
  navigateToAdd() {
    this.router.navigate(['/Categories/Agregar']);
  }
  redirectToAdd() {
    window.location.href = '/Categories/Agregar';
  }
  navigateToUpdate(idCategory: string) {
    this.router.navigate(['/Categories/Actualizar', idCategory]);
  }
  ngOnInit(): void {
    this.loadAllCategories();
  }
  loadAllCategories(): void {
    this.service.getAllCategories().pipe(
      catchError(error => {
        this.errorMessage = 'Error al cargar las categorias';
        this.loading = false;
        return of([]); 
      })
    ).subscribe(categories => {
      this.listaCategories = categories;
      this.loading = false;
    });
  }
}
