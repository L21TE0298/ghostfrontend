import { Component, OnInit } from '@angular/core';
import { NutrientDTO } from '../interfaces/nutrients.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../../layout/service/app.layout.service';

@Component({
  selector: 'app-update-nutrient',
  templateUrl: './update-nutrient.component.html',
  styleUrl: './update-nutrient.component.css'
})
export class UpdateNutrientComponent implements OnInit{
  nutrient: NutrientDTO = {
    idNutrient: 0,
    name: '',
  };
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LayoutService
  ) {}

  ngOnInit(): void {
    const idNutrient = +this.route.snapshot.paramMap.get('idNutrient')!;

    // Llamar al servicio para obtener el cupón
    this.service.getNutrientById(idNutrient).subscribe({
      next: (nutrient) => {
        this.nutrient = nutrient;
      },
      error: () => {
        this.errorMessage = 'Error al cargar el nutriente';
      }
    });
  }
  updateNutrient(): void {
    this.service.updateNutient(this.nutrient).subscribe({
      next: () => {
        // Redirige o muestra un mensaje de éxito
        alert('Nutrient updated successfully!');
        this.router.navigate(['/Nutrients']);
      },
      error: () => {
        this.errorMessage = 'Error al actualizar el nutriente';
      }
    });
  }
  cancel(): void {
    this.router.navigate(['/Nutrients']);
  }
}
