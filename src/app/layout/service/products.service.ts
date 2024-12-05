import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.developmen';
import { productDTO, products } from '../../core/components/interfaces/Iproducts.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlBaseProducts = environment.apiUrl + '/products'; // URL base de tu API con el endpoint

  constructor(private http: HttpClient) { }

  getProducts(): Observable<products[]> {
    return this.http.get<products[]>(this.urlBaseProducts);
  }

  getProductById(id: number): Observable<products> {
    return this.http.get<products>(`${this.urlBaseProducts}/${id}`);
  }

  createProduct(product: products): Observable<products> {
    return this.http.post<products>(this.urlBaseProducts, product);
  }

  updateProduct(id: number, product: products): Observable<products> {
    return this.http.put<products>(`${this.urlBaseProducts}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBaseProducts}/${id}`);
  }
}