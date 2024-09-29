import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

}
