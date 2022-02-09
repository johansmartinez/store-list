import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private shoppingCart: Product[]=[];
  constructor() { }

  addProductToShoppingCart(product:Product){
    this.shoppingCart.push(product);
  }

  getTotal(){
    return this.shoppingCart.reduce((sum,item) =>sum+item.price,0);
  }

  getShoppingCart(){
    return this.shoppingCart;
  }
}