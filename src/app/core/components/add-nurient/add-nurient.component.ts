import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { NutrientCrearDTO } from '../interfaces/nutrients.interface';

@Component({
  selector: 'app-add-nurient',
  standalone: true,
  imports: [  CommonModule, 
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,],
  templateUrl: './add-nurient.component.html',
  styleUrl: './add-nurient.component.css'
})
export class AddNurientComponent {
  form: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder, private layoutService: LayoutService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const nutrientData: NutrientCrearDTO = this.form.value;
      this.layoutService.registerNutrient(nutrientData).subscribe(
        (response) => {
          this.message = response.message;
          // Optionally, reset the form or navigate to another page
          this.router.navigate(['/Nutrients']);
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
      this.router.navigate(['/Nutrients']);
    }
  }

