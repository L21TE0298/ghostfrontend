import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../interfaces/categories,interface';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../../layout/service/app.layout.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{
  category: CategoryDTO = {
    idCategory: 0,
    name: '',
  };
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LayoutService
  ) {}

  ngOnInit(): void {
    const idCategory = +this.route.snapshot.paramMap.get('idCategory')!;

    // Llamar al servicio para obtener el cupón
    this.service.getCategorieById(idCategory).subscribe({
      next: (category) => {
        this.category = category;
      },
      error: () => {
        this.errorMessage = 'Error al cargar el nutriente';
      }
    });
  }
  updateCategory(): void {
    this.service.updateCategory(this.category).subscribe({
      next: () => {
        // Redirige o muestra un mensaje de éxito
        alert('Categorie updated successfully!');
        this.router.navigate(['/Categories']);
      },
      error: () => {
        this.errorMessage = 'Error al actualizar el nutriente';
      }
    });
  }
  cancel(): void {
    this.router.navigate(['/Categories']);
  }
}
