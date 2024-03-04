import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<Product[]>('/products')
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<Product[]>(`/products/${id}`)
  }

  addProductToDB(product: any): Observable<any> {
    return this.http.post('/products', product)
  }

}
