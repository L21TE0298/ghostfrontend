import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { productDTO } from '../../interfaces/Iproducts.interface'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ButtonModule, CardModule, RatingModule],
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
  listaProductos: productDTO[] = [];

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.getAllProducts().subscribe(
      data => {
        this.listaProductos = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }
}
