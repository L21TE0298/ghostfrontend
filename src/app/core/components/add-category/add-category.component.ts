import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { CategoryCrearDTO } from '../interfaces/categories,interface';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, 
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  form: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder, private layoutService: LayoutService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const categoryData: CategoryCrearDTO = this.form.value;
      this.layoutService.registerCategory(categoryData).subscribe(
        (response) => {
          this.message = response.message;
          this.router.navigate(['/Categories']);
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
      
      this.router.navigate(['/Categories']);
    }
  }

