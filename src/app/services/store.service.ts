import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  shoppingCart: Product[]=[];
  total:Number=0;
  constructor() { }

  addProductToShoppingCart(product:Product){
    this.shoppingCart.push(product);
  }

  getTotal(){
    return this.shoppingCart.reduce((sum,item) =>sum+item.price,0);
  }
}
