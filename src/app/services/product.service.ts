import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products?limit=12&offset=0');
  }
}
